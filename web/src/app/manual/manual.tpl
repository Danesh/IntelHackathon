<div class="cyngnmodule container-fluid">
<h1>Manual Controls</h1>
    <div id="control-container">
        <div class="row" style="margin-left: 10px;">
            <label style="color: black; margin-right: 10px;">X Position:</label>
            <input type="text" style="margin-right: 10px;" id="x-pos" placeholder="">
            <label style="color: black; margin-right: 10px;">Y Position:</label>
            <input type="text" style="margin-right: 10px;" id="y-pos" placeholder="">
        </div>
        <div class="row" style="margin-top: 10px; margin-left: 10px;">
            <button class="btn btn-primary" ng-click="postMoveTo()"
            type="button">Move Stylus</button>
        </div>
        <div class="row" style="margin-top: 10px; margin-left: 10px;">
            <button class="btn btn-success"
            type="button" ng-click="tapscreen()">Tap Screen</button>
            <button class="btn btn-success"
            type="button">Rotate Portrait</button>
            <button class="btn btn-success"
            type="button">Rotate Landscape</button>
        </div>
        <div class="row" style="margin-left: 10px;">
            <!-- <iframe seamless src="camera.html" width="640" height="480" frameborder="0" style="
                background-color: transparent;
                border: 0px none transparent;
                padding: 0px;
                overflow: hidden;
                scrolling: no"></iframe> -->
        </div>
    </div>
</div>
