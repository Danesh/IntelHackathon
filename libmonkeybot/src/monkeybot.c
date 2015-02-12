/*
 * Author: Brendan Le Foll <brendan.le.foll@intel.com>
 * Copyright (c) 2014 Intel Corporation.
 *
 * Permission is hereby granted, free of charge, to any person obtaining
 * a copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
 * LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
 * OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
 * WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

#include <stdio.h>
#include <string.h>
#include <unistd.h>
#include <math.h>

#include "mraa/pwm.h"
#include "monkeybot.h"

#define sq(a) ((a) * (a))

#define STATS "I'm the juggernaut bitch!"

/*            /
 *           /
 *          /   <-- ARM2
 *         /
 *        o
 *        |
 *        |  <----- ARM1
 *        |
 *        |
 */
#define ARM1_SERVO_PIN				6
#define ARM2_SERVO_PIN				5
#define TILT_SERVO_PIN				3
#define ROTATE_SERVO_PIN			9

#define ARM1_MIN_PULSE_WIDTH 		700
#define ARM1_MAX_PULSE_WIDTH 		1900
#define ARM2_MIN_PULSE_WIDTH 		500
#define ARM2_MAX_PULSE_WIDTH 		2000
#define TILT_SERVO_PULSE_WIDTH_UP 	1100
#define TILT_SERVO_PULSE_WIDTH_DOWN	1500
#define ROTATE_MIN_PULSE_WIDTH		800
#define ROTATE_MAX_PULSE_WIDTH		2200
#define ROTATE_MIN_ANGLE			0
#define ROTATE_MAX_ANGLE			180
#define PI 							3.14

#define ARM1_LENGTH					75	// mm
#define ARM2_LENGTH					80	// mm

#define ARM1_DEFAULT_PULSE_WIDTH	ARM1_MAX_PULSE_WIDTH
#define ARM2_DEFAULT_PULSE_WIDTH	ARM2_MAX_PULSE_WIDTH
#define TILT_DEFAULT_PULSE_WIDTH	TILT_SERVO_PULSE_WIDTH_UP
#define ROTATE_DEFAULT_PULSE_WIDTH	ROTATE_MIN_PULSE_WIDTH

mraa_pwm_context arm1Context = NULL;
mraa_pwm_context arm2Context = NULL;
mraa_pwm_context tiltContext = NULL;
mraa_pwm_context rotateContext = NULL;

int monkey_start(void) {
	if ((arm1Context = mraa_pwm_init(ARM1_SERVO_PIN)) == NULL) return 0;
	if (mraa_pwm_period_ms(arm1Context, 20) != MRAA_SUCCESS) return 0;

	if ((arm2Context = mraa_pwm_init(ARM2_SERVO_PIN)) == NULL) return 0;
	if (mraa_pwm_period_ms(arm2Context, 20) != MRAA_SUCCESS) return 0;

	if ((tiltContext = mraa_pwm_init(TILT_SERVO_PIN)) == NULL) return 0;
	if (mraa_pwm_period_ms(tiltContext, 20) != MRAA_SUCCESS) return 0;

	if ((rotateContext = mraa_pwm_init(ROTATE_SERVO_PIN)) == NULL) return 0;
	if (mraa_pwm_period_ms(rotateContext, 20) != MRAA_SUCCESS) return 0;

	// now enable all our PWMs
	if (mraa_pwm_enable(arm1Context, 1) != MRAA_SUCCESS) return 0;
	if (mraa_pwm_enable(arm2Context, 1) != MRAA_SUCCESS) return 0;
	if (mraa_pwm_enable(tiltContext, 1) != MRAA_SUCCESS) return 0;
	if (mraa_pwm_enable(rotateContext, 1) != MRAA_SUCCESS) return 0;

	mraa_pwm_pulsewidth_us(arm1Context, ARM1_DEFAULT_PULSE_WIDTH);
	mraa_pwm_pulsewidth_us(arm2Context, ARM2_DEFAULT_PULSE_WIDTH);
	mraa_pwm_pulsewidth_us(tiltContext, TILT_DEFAULT_PULSE_WIDTH);
	mraa_pwm_pulsewidth_us(rotateContext, ROTATE_DEFAULT_PULSE_WIDTH);

	return 1;
}

int monkey_stop(void) {
	if (arm1Context != NULL) {
		mraa_pwm_enable(arm1Context, 0);
	}
	if (arm2Context != NULL) {
		mraa_pwm_enable(arm2Context, 0);
	}
	if (tiltContext != NULL) {
		mraa_pwm_enable(tiltContext, 0);
	}
	if (rotateContext != NULL) {
		mraa_pwm_enable(rotateContext, 0);
	}

	return 1;
}

int monkey_down(void) {
	if (tiltContext != NULL) {
		mraa_pwm_pulsewidth_us(tiltContext, TILT_SERVO_PULSE_WIDTH_DOWN);
		return 1;
	}
	return 0;
}

int monkey_up(void) {
	if (tiltContext != NULL) {
		mraa_pwm_pulsewidth_us(tiltContext, TILT_SERVO_PULSE_WIDTH_UP);
		return 1;
	}
	return 0;
}

int monkey_tap(void) {
	if (tiltContext != NULL) {
		mraa_pwm_pulsewidth_us(tiltContext, TILT_SERVO_PULSE_WIDTH_DOWN);
		usleep(300000);
		mraa_pwm_pulsewidth_us(tiltContext, TILT_SERVO_PULSE_WIDTH_UP);
		return 1;
	}
	return 0;
}

int monkey_rotate(int angle) {
	if (rotateContext != NULL) {
		float factor = (float) (ROTATE_MAX_PULSE_WIDTH - ROTATE_MIN_PULSE_WIDTH)
					/ (ROTATE_MAX_ANGLE - ROTATE_MIN_ANGLE);
		mraa_pwm_pulsewidth_us(rotateContext, (int) ((float) angle * factor));
		return 1;
	}
	return 0;
}

void move_arm(mraa_pwm_context ctx, float angle) {
	float factor = (float) (ROTATE_MAX_PULSE_WIDTH - ROTATE_MIN_PULSE_WIDTH)
					/ (ROTATE_MAX_ANGLE - ROTATE_MIN_ANGLE);

	mraa_pwm_pulsewidth_us(ctx, (int) (angle * factor));
}

int monkey_move_to(int x, int y) {
	// alias arm lengths
	float a = (float) ARM1_LENGTH;
	float b = (float) ARM2_LENGTH;

	// distance from origin
	float z = sqrt( sq(x) + sq(y) );
	// angle XY makes w/ the horizontal ; slope
	float phi = atan(y/x) * (180 / PI);
	// B : angle across from b in the triangle formed by a , b and XY
	float B = acos( (sq(a) + sq(z) - sq(b)) / (2*a*z) ) * (180/PI);

	// **ASSUMING** an elbow-up configuration for the robot arm
	float theta1 = B + phi;
	float theta2 = acos( (sq(a) + sq(b) - sq(z)) / (2*a*b) ) * (180/PI);

	// move arms
	move_arm(arm1Context, theta1);
	sleep(1);
	move_arm(arm2Context, theta2);

	return 0;
}

char* monkey_get_stats(void) {
	return STATS;
}

int monkey_fling_shit(void) {
	return 0;
}

//main(int argc, char **argv)
//{
//	int i;
//    mraa_pwm_context pwm;
//    pwm = mraa_pwm_init(3);
//    mraa_pwm_period_ms(pwm, 20);
//    mraa_pwm_enable(pwm, 1);
//    while (1) {
//        for (i = 400; i < 1900; i++) {
//        	mraa_pwm_pulsewidth_us(pwm, i);
//            usleep(10000);
//        }
//    }
//
//    return 0;
//}

