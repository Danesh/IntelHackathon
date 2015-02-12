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

int monkey_start(void) {
	return 0;
}

int monkey_stop(void) {
	return 0;
}

int monkey_down(void) {
	return 0;
}

int monkey_up(void) {
	return 0;
}

int monkey_tap(void) {
	return 0;
}

int monkey_rotate(int angle) {
	return 0;
}

int monkey_move_to(int x, int y) {
	return 0;
}

char* monkey_get_stats(void) {
	return STATS;
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
