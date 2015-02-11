adb shell netcfg | grep wlan0 | tr '/' ' ' | awk '{ print $3 }' > ipaddress.txt
