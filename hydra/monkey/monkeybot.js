// Library that talks to MonkeyBot native code
//

var ffi = require("ffi")

// This is the API for the MonkeyBot control library
var libmonkey = ffi.Library(process.cwd() + '/libmonkeybot.so', {
    "monkey_start": [ 'bool', [] ],
    "monkey_stop": [ 'bool', [] ],
    "monkey_down": [ 'bool', [] ],
    "monkey_up": [ 'bool', [] ],
    "monkey_tap": [ 'bool', [] ],
    "monkey_rotate": [ 'bool', [ 'int' ] ],
    "monkey_move_to": [ 'bool', [ 'int', 'int' ] ],
    // "monkey_power_hold_at": [ 'bool', [ 'int' ] ],
    "monkey_get_stats": [ 'string', [] ],
    "monkey_fling_shit": [ 'bool', [] ]
});

exports.monkeybot = function() {
    //
    // API calls: Note these are all blocking functions
    //

    var monkey_run_script = function(script, progress_fn, end_fn) {
        // Breaks up incoming script into lines, and executes function corresponding
        // to each line

        var lines = script.split('\n')

        for (var i=0; i<lines.length; i++) {
            var line = lines[i].trim() // one command
            if (!line) {
                continue;
            }
            console.log("> Parsed line: " + line);
            var tokens = line.split(' ')
            var func = tokens[0] // the monkeybot function
            console.log("> Parsed function: " + func);
            var args = tokens.splice(1).filter(function(e) { return !(!e); }) // arguments if any
            console.log("> Parsed args: " + args);

            if (funcs[func]) {
                progress_fn("Running function: " + func)
                progress_fn("Parsed args: " + args);
                funcs[func].apply(null, args);
            } else {
                progress_fn("Skipping UNKNOWN function: " + func)
                console.log("Unknown function: " + func);
            }
        }

        progress_fn("DONE!");
        end_fn()
    }

    var monkey_start = function() {
        console.log("Invoking " + arguments.callee.name)
        return libmonkey.monkey_start()
    }

    var monkey_stop = function() {
        console.log("Invoking " + arguments.callee.name)
        return libmonkey.monkey_stop()
    }

    var monkey_down = function() {
        console.log("Invoking " + arguments.callee.name)
        return libmonkey.monkey_down()
    }

    var monkey_up = function() {
        console.log("Invoking " + arguments.callee.name)
        return libmonkey.monkey_up()
    }

    var monkey_tap = function() {
        console.log("Invoking " + arguments.callee.name)
        return libmonkey.monkey_tap()
    }

    var monkey_rotate = function(angle) {
        console.log("Invoking " + arguments.callee.name + " with " + JSON.stringify(arguments))
        return libmonkey.monkey_rotate(angle)
    }

    var monkey_move_to = function(x, y) {
        console.log("Invoking " + arguments.callee.name + " with " + JSON.stringify(arguments))
        return libmonkey.monkey_move_to(x, y)
    }

    // var monkey_power_hold_at = function(level) {
    //     console.log("Invoking " + arguments.callee.name + " with " + JSON.stringify(arguments))
    //     return libmonkey.monkey_power_hold_at(level)
    // }

    var monkey_get_stats = function() {
        console.log("Invoking " + arguments.callee.name + " with " + JSON.stringify(arguments))
        return libmonkey.monkey_get_stats()
    }

    var monkey_fling_shit = function() {
        console.log("Invoking " + arguments.callee.name)
        return libmonkey.monkey_fling_shit()
    }

    return {
        monkey_run_script: monkey_run_script,
        monkey_start: monkey_start,
        monkey_stop: monkey_stop,
        monkey_down: monkey_down,
        monkey_up: monkey_up,
        monkey_tap: monkey_tap,
        monkey_rotate: monkey_rotate,
        monkey_move_to: monkey_move_to,
        // monkey_power_hold_at: monkey_power_hold_at,
        monkey_get_stats: monkey_get_stats,
        monkey_fling_shit: monkey_fling_shit
    }
}()

