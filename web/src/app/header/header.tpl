<nav class="navbar navbar-default" role="navigation">
    <div class="container-fluid">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#!/home">#cyanogen</a>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul class="nav navbar-nav">
                <li class="{{isActive(home)}}"><a href="#!/home">home</a></li>
                <li class="{{isActive('camera')}}"><a href="#!/camera">camera view</a></li>
                <li class="{{isActive('adb')}}"><a href="#!/adb">adb logcat</a></li>
                <li class="{{isActive('script')}}"><a href="#!/script">script logs</a></li>
                <li class="{{isActive('manual')}}"><a href="#!/manual">manual controls</a></li>
            </ul>
        </div>
    </div>
</nav>
