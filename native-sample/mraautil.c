#include <stdlib.h>
#include <string.h>
#include "mraa.h"

char *get_mraa_version()
{
    // Alloc a string and make a copy of the board name
    const char* board_name = mraa_get_platform_name();
    char *ret_board_name = malloc((strlen(board_name) + 1) * sizeof(char));
    strcpy(ret_board_name, board_name);
    
    //fprintf(stdout, "hello mraa\n Version: %s\n Running on %s\n", mraa_get_version(), board_name);

    // Alloc a string and make a copy of the version string
    const char* version = mraa_get_version();
    char *ret_version = malloc((strlen(version) + 1) * sizeof(char));
    strcpy(ret_version, version);

    mraa_deinit();

    // Make JSON out of the strings
    
    return ret_version;
}
