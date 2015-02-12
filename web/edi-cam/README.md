# edi-cam

edi-cam demonstrates live video streaming on Intel Edison using Node.js and WebSockets. Audio is not supported at the moment. See the demo in action [here](http://youtu.be/nVDL2-bFT3Y).

The Node.js server is responsible for:

* Listening for the incoming video stream via HTTP. [ffmpeg](https://www.ffmpeg.org/), a multimedia framework for converting and streaming audio / video, is used to encode the webcam's video to MPEG1.
* Broadcasting the video stream via WebSockets to all connected browsers. 
* Serving `web/client/index.html`, which renders the video stream onto a canvas element. [jsmpeg](https://github.com/phoboslab/jsmpeg), a JavaScript MPEG1 decoder, is used to decode the video stream.

This project was inspired by [phoboslab](http://phoboslab.org/log/2013/09/html5-live-video-streaming-via-websockets).

## Setup

To get started with Edison if you have never set it up before, see this [post](https://communities.intel.com/docs/DOC-23148). The most relevant sections are "Connecting Edison" and "Connect Edison to WiFi". Although the instructions are for the Arduino breakout board, setup is similar for the Mini breakout board: Snap Edison onto the left side of the board, then connect **two** micro USB cables to the board and to your computer.

The setup assumes that Edison and your computer are on the same Wi-Fi network. This is also the case for additional computers that are used to view the video stream.

With Edison and your computer on the same Wi-Fi network, it is also possible to connect to Edison wirelessly via SSH. This is particularly helpful when running the demo. To do so, open a new terminal window and type the following:

    $ ssh root@myedison.local
    root@myedison.local's password: 
    root@myedison:~# 

Replace `myedison` with the name of your Edison. When prompted for your password, use the password you created when configuring Edison.

### Setting up hardware

Use a [UVC-compatible webcam](http://www.ideasonboard.org/uvc/). In my setup, I am using the [Creative Live! Cam Sync HD 720P](http://www.amazon.com/Creative-Live-Sync-720P-Webcam/dp/B0092QJRPC).

External power (7-15 VDC) must be supplied to use Edison as a USB host. Refer to the appropriate item below (based on the board you have) to power and connect a USB device:

* If you have the Arduino breakout board, see this [document](https://communities.intel.com/docs/DOC-23161). Power must be supplied on J1 (the power jack). Plug the webcam into the USB port next to the power jack. Make sure the switch SW1 is switched towards the USB port.
* If you have the Mini breakout board, see this [document](https://communities.intel.com/docs/DOC-23252). Power must be supplied on J21 / J22, e.g. a 9V battery can be connected to J21 with a 2-pin connector. Connect a micro USB to USB OTG adapter to the webcam and plug into the micro USB port closest to J21 (lower right).

### Installing packages

#### Configuring the package manager

Edison's operating system is based off Yocto Linux, which uses `opkg` as its package manager. [AlexT's unofficial opkg repository](http://alextgalileo.altervista.org/edison-package-repo-configuration-instructions.html) is highly recommended for adding packages to Edison. It includes many useful packages, such as git and the UVC driver.

To configure the repository, add the following lines to `/etc/opkg/base-feeds.conf`:

    src/gz all http://repo.opkg.net/edison/repo/all
    src/gz edison http://repo.opkg.net/edison/repo/edison
    src/gz core2-32 http://repo.opkg.net/edison/repo/core2-32

The configuration used in this demo is also provided for reference. If `/etc/opkg/base-feeds.conf` is empty, simply copy this file into `/etc/opkg/`. If you are in the `edi-cam` root directory, type the following:

    cp etc/opkg/base-feeds.conf /etc/opkg/

Update `opkg`:

    opkg update

If the update is successful, the output should look like this:

    Downloading http://repo.opkg.net/edison/repo/all/Packages.gz.
    Inflating http://repo.opkg.net/edison/repo/all/Packages.gz.
    Updated list of available packages in /var/lib/opkg/all.
    Downloading http://repo.opkg.net/edison/repo/edison/Packages.gz.
    Inflating http://repo.opkg.net/edison/repo/edison/Packages.gz.
    Updated list of available packages in /var/lib/opkg/edison.
    Downloading http://repo.opkg.net/edison/repo/core2-32/Packages.gz.
    Inflating http://repo.opkg.net/edison/repo/core2-32/Packages.gz.
    Updated list of available packages in /var/lib/opkg/core2-32.

#### Cloning this repository onto Edison

To install git:

    opkg install git

Then clone this repository using `git clone <git repo URL>`.

#### Installing the UVC driver

To install the UVC driver:

    opkg install kernel-module-uvcvideo

If the webcam is plugged into the board, unplug and plug it back in to make sure the webcam is detected properly. Verify that the webcam is detected by typing `dmsg -c`. The console output should look similar to this (the product information will be specific to your webcam):

    [   92.910838] hub 2-0:1.0: USB hub found
    [   92.910899] hub 2-0:1.0: 1 port detected
    [   92.957888] pmic_ccsm pmic_ccsm: USB VBUS Detected. Notifying OTG driver
    [   93.210150] usb 1-1: new high-speed USB device number 2 using dwc3-host
    [   93.329961] usb 1-1: New USB device found, idVendor=041e, idProduct=4095
    [   93.329992] usb 1-1: New USB device strings: Mfr=3, Product=1, SerialNumber=2
    [   93.330014] usb 1-1: Product: Live! Cam Sync HD VF0770
    [   93.330033] usb 1-1: Manufacturer: Creative Technology Ltd.
    [   93.330052] usb 1-1: SerialNumber: 2014090439994
    [   93.339634] uvcvideo: Found UVC 1.00 device Live! Cam Sync HD VF0770 (041e:4095)
    [   93.352641] input: Live! Cam Sync HD VF0770 as /devices/pci0000:00/0000:00:11.0/dwc3-host.2/usb1/1-1/1-1:1.0/input/input3

Also, verify that the video device node has been created by typing `ls -l /dev/video0`:

    root@eejun-edison02:~# ls -l /dev/video0 
    crw-rw----    1 root     video      81,   0 Nov 10 15:57 /dev/video0

#### Installing ffmpeg

To install `ffmpeg`:

* Navigate to `bin`.
* Type `./install_ffmpeg.sh` to run the shell script.

If the download doesn't work, the release link may have changed. Check [here](http://johnvansickle.com/ffmpeg/), copy the address of the latest release, and replace in the shell script.

#### Installing Node.js packages

* Navigate to `web/server`.
* Install the Node.js packages by typing `npm install`.

### Running the demo

#### Updating the WebSocket address

Modify `wsUrl` in `web/client/index.html`. The section of the code looks like this:

    // CHANGE THIS TO THE APPROPRIATE WS ADDRESS
    var wsUrl = 'ws://myedison.local:8084/';

Replace `myedison` with the name of your Edison.

#### Running the Node.js server

* Navigate to `web/server`.
* Run the server by typing `node server.js`.

The Node.js server should now be running. The console will look like this:

    WebSocket server listening on port 8084
    HTTP server listening on port 8080
    Listening for video stream on port 8082

#### Converting the video using ffmpeg

Now that the server has started, do the following:

* Open a new shell window, SSH into Edison, and navigate to `bin`.
* Type `./do_ffmpeg.sh` to run the shell script.

The video stream should now be converting. The console will look similar to this:

    ffmpeg version 2.4.3-   http://johnvansickle.com/ffmpeg/    Copyright (c) 2000-2014 the FFmpeg developers
      built on Nov  4 2014 13:48:54 with gcc 4.8 (Debian 4.8.3-13)
      configuration: --enable-gpl --enable-version3 --disable-shared --disable-debug --enable-runtime-cpudetect --enable-libmp3lame --enable-libx264 --enable-libx265 --enable-libwebp --enable-libspeex --enable-libvorbis --enable-libvpx --enable-libfreetype --enable-fontconfig --enable-libxvid --enable-libopencore-amrnb --enable-libopencore-amrwb --enable-libtheora --enable-libvo-aacenc --enable-libvo-amrwbenc --enable-gray --enable-libopenjpeg --enable-libopus --disable-ffserver --enable-libass --enable-gnutls --cc=gcc-4.8
      libavutil      54.  7.100 / 54.  7.100
      libavcodec     56.  1.100 / 56.  1.100
      libavformat    56.  4.101 / 56.  4.101
      libavdevice    56.  0.100 / 56.  0.100
      libavfilter     5.  1.100 /  5.  1.100
      libswscale      3.  0.100 /  3.  0.100
      libswresample   1.  1.100 /  1.  1.100
      libpostproc    53.  0.100 / 53.  0.100
    Input #0, video4linux2,v4l2, from '/dev/video0':
      Duration: N/A, start: 102.771608, bitrate: 36864 kb/s
        Stream #0:0: Video: rawvideo (YUY2 / 0x32595559), yuyv422, 320x240, 36864 kb/s, 30 fps, 30 tbr, 1000k tbn, 1000k tbc
    Please use -b:a or -b:v, -b is ambiguous
    Output #0, mpeg1video, to 'http://127.0.0.1:8082/320/240/':
      Metadata:
        encoder         : Lavf56.4.101
        Stream #0:0: Video: mpeg1video, yuv420p, 320x240, q=2-31, 800 kb/s, 30 fps, 30 tbn, 30 tbc
        Metadata:
          encoder         : Lavc56.1.100 mpeg1video
    Stream mapping:
      Stream #0:0 -> #0:0 (rawvideo (native) -> mpeg1video (native))
    Press [q] to stop, [?] for help
    frame=  170 fps= 31 q=1.8 size=     645kB time=00:00:05.60 bitrate= 943.2kbits/s dup=1 drop=0

#### Viewing the video stream

Open a browser window and navigate to `http://myedison.local:8080`, where `myedison` is the name of your Edison. You should now see the video stream from your webcam!