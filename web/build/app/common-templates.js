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
    '    background-color: transparent;\n' +
    '    border: 0px none transparent;\n' +
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
  $templateCache.put('app/manual/manual.tpl',
    '<div class="cyngnmodule container-fluid">\n' +
    '<h1>manual controls</h1>\n' +
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
    '            <a class="navbar-brand" href="index.html">Cyanogen Monkey</a>\n' +
    '        </div>\n' +
    '\n' +
    '        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">\n' +
    '            <ul class="nav navbar-nav">\n' +
    '                <li><a href="index.html">home</a></li>\n' +
    '                <li class="{{isActive(\'camera\')}}"><a href="app.html#!/camera">camera view</a></li>\n' +
    '                <li class="{{isActive(\'adb\')}}"><a href="app.html#!/adb">adb logcat</a></li>\n' +
    '                <li class="{{isActive(\'script\')}}"><a href="app.html#!/script">script logs</a></li>\n' +
    '                <li class="{{isActive(\'manual\')}}"><a href="app.html#!/manual">manual controls</a></li>\n' +
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
  $templateCache.put('app/script/script.tpl',
    '<div class="cyngnmodule container-fluid">\n' +
    '<h1>script logs</h1>\n' +
    '</div>\n' +
    '');
}]);
})();
