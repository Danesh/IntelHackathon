(function(module) {
try {
  module = angular.module('common-templates');
} catch (e) {
  module = angular.module('common-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/adb/adb.tpl',
    '<div class="cyngnmodule adb">\n' +
    '<h1>adb logcat</h1>\n' +
    '  <div class="container-fluid">\n' +
    '    <iframe src="adb.html" width="800" height="450" frameborder="0"></iframe>\n' +
    '  </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('common-templates');
} catch (e) {
  module = angular.module('common-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/camera/camera.tpl',
    '<div class="cyngnmodule container-fluid">\n' +
    '<h1>camera view</h1>\n' +
    '\n' +
    '<iframe seamless src="camera.html" width="640" height="480" frameborder="0" style="\n' +
    '    -moz-transform: scale(1.5, 1.5);\n' +
    '    -webkit-transform: scale(1.5, 1.5);\n' +
    '    -o-transform: scale(1.5, 1.5);\n' +
    '    -ms-transform: scale(1.5, 1.5);\n' +
    '    transform: scale(1.5, 1.5);\n' +
    '    -moz-transform-origin: top left;\n' +
    '    -webkit-transform-origin: top left;\n' +
    '    -o-transform-origin: top left;\n' +
    '    -ms-transform-origin: top left;\n' +
    '    transform-origin: top left;\n' +
    '    padding: 0px;\n' +
    '    overflow: hidden;\n' +
    '    scrolling: no"></iframe>\n' +
    '\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('common-templates');
} catch (e) {
  module = angular.module('common-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/footer/footer.tpl',
    '<div class="seed-footer">\n' +
    '  &copy;2015 Cyanogen Inc.\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('common-templates');
} catch (e) {
  module = angular.module('common-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/header/header.tpl',
    '<nav class="navbar navbar-default" role="navigation">\n' +
    '    <div class="container-fluid">\n' +
    '        <div class="navbar-header">\n' +
    '            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">\n' +
    '                <span class="sr-only">Toggle navigation</span>\n' +
    '                <span class="icon-bar"></span>\n' +
    '                <span class="icon-bar"></span>\n' +
    '                <span class="icon-bar"></span>\n' +
    '            </button>\n' +
    '            <a class="navbar-brand" href="#!/home">#cyanogen</a>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n' +
    '            <ul class="nav navbar-nav">\n' +
    '                <li class="{{isActive(home)}}"><a href="#!/home">home</a></li>\n' +
    '                <li class="{{isActive(\'camera\')}}"><a href="#!/camera">camera view</a></li>\n' +
    '                <li class="{{isActive(\'adb\')}}"><a href="#!/adb">adb logcat</a></li>\n' +
    '                <li class="{{isActive(\'script\')}}"><a href="#!/script">script logs</a></li>\n' +
    '                <li class="{{isActive(\'manual\')}}"><a href="#!/manual">manual controls</a></li>\n' +
    '            </ul>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</nav>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('common-templates');
} catch (e) {
  module = angular.module('common-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/home/home.tpl',
    '<style>\n' +
    '  body{\n' +
    '    margin: 0px;\n' +
    '    padding: 0px;\n' +
    '  }\n' +
    '  #banner {\n' +
    '    position: relative;\n' +
    '    overflow: hidden;\n' +
    '    height: 500px;\n' +
    '  }\n' +
    '  video {\n' +
    '    position: absolute;\n' +
    '    z-index: -100;\n' +
    '    background-size: cover;\n' +
    '  }\n' +
    '  .sbox {\n' +
    '    position:relative;\n' +
    '    z-index: 0;\n' +
    '    margin-left:5%;\n' +
    '    margin-top:10%;\n' +
    '    margin-bottom: 5%;\n' +
    '    margin-right:20%;\n' +
    '    border-radius: 25px;\n' +
    '    padding-top: 10px;\n' +
    '    padding-bottom: 10px;\n' +
    '    padding-left: 20px;\n' +
    '    padding-right: 20px;\n' +
    '    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);\n' +
    '    -webkit-box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);\n' +
    '    -ms-box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);\n' +
    '    -o-box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);\n' +
    '    background-color:rgba(0, 0, 0, 0.2)\n' +
    '  }\n' +
    '  .maintext {\n' +
    '    position: relative;\n' +
    '    z-index: 100;\n' +
    '    margin-left:5%;\n' +
    '    margin-right:5%;\n' +
    '  }\n' +
    '  .maintext h1 {\n' +
    '    color: white;\n' +
    '    font-size:50px;\n' +
    '    text-shadow: 0 0 8px #000;\n' +
    '  }\n' +
    '  .maintext p {\n' +
    '    color: white;\n' +
    '    font-size:18px;\n' +
    '    text-shadow: 0 0 5px #000;\n' +
    '  }\n' +
    '  .seed-footer{\n' +
    '    margin-top: 50px;\n' +
    '    margin-bottom: 50px;\n' +
    '\n' +
    '    margin-left: 20px;\n' +
    '    margin-right: auto;\n' +
    '\n' +
    '    padding-left: 10px;\n' +
    '    width: 1280px;\n' +
    '  }\n' +
    '\n' +
    '</style>\n' +
    '\n' +
    '<div id="banner">\n' +
    '  <video autoplay loop muted width="100%">\n' +
    '    <source src="assets/monkeytester.mp4" type="video/mp4">\n' +
    '  </video>\n' +
    '  <div class="sbox">\n' +
    '    <div class="maintext">\n' +
    '      <h1>physical monkey tester</h1>\n' +
    '      <p>To create a suite of tests that will allow mobile devices to be physically\n' +
    '      tested. This will include a robotic arm holding a stylus for touch events,\n' +
    '      as well as a rotate the device into different orientations.\n' +
    '      All this can be monitored remotely via a web service.</p>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('common-templates');
} catch (e) {
  module = angular.module('common-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/manual/manual.tpl',
    '<div class="cyngnmodule container-fluid">\n' +
    '<h1>Manual Controls</h1>\n' +
    '    <div id="control-container">\n' +
    '        <div class="row" style="margin-left: 10px;">\n' +
    '            <label style="color: black; margin-right: 10px;">X Position:</label>\n' +
    '            <input type="text" style="margin-right: 10px;" placeholder="">\n' +
    '            <label style="color: black; margin-right: 10px;">Y Position:</label>\n' +
    '            <input type="text" style="margin-right: 10px;" placeholder="">\n' +
    '        </div>\n' +
    '        <div class="row" style="margin-top: 10px; margin-left: 10px;">\n' +
    '            <button class="btn btn-primary"\n' +
    '            type="button">Move Stylus</button>\n' +
    '        </div>\n' +
    '        <div class="row" style="margin-top: 10px; margin-left: 10px;">\n' +
    '            <button class="btn btn-success"\n' +
    '            type="button" ng-click="tapscreen()">Tap Screen</button>\n' +
    '            <button class="btn btn-success"\n' +
    '            type="button">Rotate Portrait</button>\n' +
    '            <button class="btn btn-success"\n' +
    '            type="button">Rotate Landscape</button>\n' +
    '        </div>\n' +
    '        <div class="row" style="margin-left: 10px;">\n' +
    '            <!-- <iframe seamless src="camera.html" width="640" height="480" frameborder="0" style="\n' +
    '                background-color: transparent;\n' +
    '                border: 0px none transparent;\n' +
    '                padding: 0px;\n' +
    '                overflow: hidden;\n' +
    '                scrolling: no"></iframe> -->\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('common-templates');
} catch (e) {
  module = angular.module('common-templates', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('app/script/script.tpl',
    '<div class="cyngnmodule container-fluid">\n' +
    '<h1>script logs</h1>\n' +
    '</div>\n' +
    '');
}]);
})();
