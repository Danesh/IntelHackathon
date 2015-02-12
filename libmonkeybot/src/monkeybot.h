/*
 * monkeybot.h
 *
 *  Created on: Feb 11, 2015
 *      Author: clark
 */

#ifndef MONKEYBOT_H_
#define MONKEYBOT_H_

int monkey_start(void);

int monkey_stop(void);

int monkey_down(void);

int monkey_up(void);

int monkey_tap(void);

int monkey_rotate(int angle);

int monkey_move_to(int x, int y);

char* monkey_get_stats(void);

#endif /* MONKEYBOT_H_ */
