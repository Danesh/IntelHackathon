#webpage localhost

###first time:
```
(from the web directory)

npm install -g gulp
npm install
bower install
```

###running node server.js
```
gulp build
node server.js
```

web browser: ```http://localhost:8000/build/index.html```

###other way (might have bugs)
```
gulp watch:build
```

web browser: ``` http://localhost:3000```

this still has issues.

