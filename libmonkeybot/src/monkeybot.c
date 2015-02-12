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

#include "mraa/pwm.h"
#include "monkeybot.h"

#define STATS "If'm the juggernaut bitch!"

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

#define ARM1_MIN_PULSE_WIDTH 		400
#define ARM1_MAX_PULSE_WIDTH 		1900
#define ARM2_MIN_PULSE_WIDTH 		400
#define ARM2_MAX_PULSE_WIDTH 		1900
#define TILT_SERVO_PULSE_WIDTH_UP 	1000
#define TILT_SERVO_PULSE_WIDTH_DOWN	1500
#define ROTATE_MIN_PULSE_WIDTH		800
#define ROTATE_MAX_PULSE_WIDTH		2200
#define ROTATE_MIN_ANGLE			0
#define ROTATE_MAX_ANGLE			180

mraa_pwm_context arm1Context;
mraa_pwm_context arm2Context;
mraa_pwm_context tiltContext;
mraa_pwm_context rotateContext;

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
		sleep(1);
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

int monkey_move_to(int x, int y) {
	return 0;
}

char* monkey_get_stats(void) {
	return STATS;
}
