#webpage localhost

###first time:
```
(from the web directory)

npm install -g gulp
npm install
bower install
```

###build with a socket connection

builds the 'build' directory and watches the src directory for changes. any
new changes refreshes the page automagically unless your javascript breaks it.

```
gulp watch
```

web browser: ``` http://localhost:3000 ```


###running node server.js

serves your 'web' directory as a webpage... this will require building your
project either with ``` gulp build ``` or ``` gulp dist ```

```
node server.js
```

web browser: ```http://localhost:8000/build/index.html``` or
 ``` http://localhost:8000/dist/index.html```
