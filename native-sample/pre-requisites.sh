#!/bin/sh
echo "Installing ffi..."
npm install -g ffi

echo "Building..."
gcc -Wall mraautil.c -shared -lmraa -o libutil.so

echo "Running sample..."
node go-native.js
