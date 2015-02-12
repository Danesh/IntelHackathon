// Library that talks to MonkeyBot native code
//

var ffi = require("ffi")

// This is the API for the MonkeyBot control library
var libmonkey = ffi.Library(process.cwd() + '/libmonkeybot.so', {
    "monkey_down": [ 'bool', [] ],
    "monkey_up": [ 'bool', [] ],
    "monkey_rotate_right": [ 'bool', [ 'int' ] ],
    "monkey_rotate_left": [ 'bool', [ 'int' ] ],
    "monkey_move_to": [ 'bool', [ 'int', 'int' ] ]
    "monkey_power_hold_at": [ 'bool', [ 'int' ] ]
    "monkey_get_stats": [ 'string', [] ]
});

exports.monkeybot = function() {
    //
    // API calls: Note these are all blocking functions
    //

    var monkey_down = function() {
        console.log("Invoking " + arguments.callee.name)
        return libmonkey.monkey_down()
    }

    var monkey_up = function() {
        console.log("Invoking " + arguments.callee.name)
        return libmonkey.monkey_up()
    }

    var monkey_rotate_right = function(angle) {
        console.log("Invoking " + arguments.callee.name + " with " + JSON.stringify(arguments))
        return libmonkey.monkey_rotate_right(angle)
    }

    var monkey_rotate_left = function(angle) {
        console.log("Invoking " + arguments.callee.name + " with " + JSON.stringify(arguments))
        return libmonkey.monkey_rotate_left(angle)
    }

    var monkey_move_to = function(x, y) {
        console.log("Invoking " + arguments.callee.name + " with " + JSON.stringify(arguments))
        return libmonkey.monkey_move_to(x, y)
    }

    var monkey_power_hold_at = function(level) {
        console.log("Invoking " + arguments.callee.name + " with " + JSON.stringify(arguments))
        return libmonkey.monkey_power_hold_at(level)
    }

    var monkey_get_stats = function() {
        console.log("Invoking " + arguments.callee.name + " with " + JSON.stringify(arguments))
        return libmonkey.monkey_get_stats()
    }

    return {
        monkey_down: monkey_down,
        monkey_up: monkey_up,
        monkey_rotate_right: monkey_rotate_right,
        monkey_rotate_left: monkey_rotate_left,
        monkey_move_to: monkey_move_to,
        monkey_power_hold_at: monkey_power_hold_at,
        monkey_get_stats: monkey_get_stats
    }
}()

