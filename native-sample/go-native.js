// Library that talks to native code

var ffi = require("ffi")

var libutil = ffi.Library(process.cwd() + '/libutil.so', {
    "get_mraa_version": [ 'string', [] ]
});

// Use it

var res = libutil.get_mraa_version();
console.log("Type of var is " + typeof(res));
if (res == null) {
    console.log("Oh no! Couldn't create object!\n");
} else {
    console.log("Got resulting version: " + res);
}
