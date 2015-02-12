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

//
// API calls: Note these are all blocking functions
//

function monkey_down() {
    console.log("Invoking " + arguments.callee.name)
    return libmonkey.monkey_down()
}

function monkey_up() {
    console.log("Invoking " + arguments.callee.name)
    return libmonkey.monkey_up()
}

function monkey_rotate_right(angle) {
    console.log("Invoking " + arguments.callee.name + " with " + JSON.stringify(arguments))
    return libmonkey.monkey_rotate_right(angle)
}

function monkey_rotate_left(angle) {
    console.log("Invoking " + arguments.callee.name + " with " + JSON.stringify(arguments))
    return libmonkey.monkey_rotate_left(angle)
}

function monkey_move_to(x, y) {
    console.log("Invoking " + arguments.callee.name + " with " + JSON.stringify(arguments))
    return libmonkey.monkey_move_to(x, y)
}

function monkey_power_hold_at(level) {
    console.log("Invoking " + arguments.callee.name + " with " + JSON.stringify(arguments))
    return libmonkey.monkey_power_hold_at(level)
}

function monkey_get_stats() {
    console.log("Invoking " + arguments.callee.name + " with " + JSON.stringify(arguments))
    return libmonkey.monkey_get_stats()
}
