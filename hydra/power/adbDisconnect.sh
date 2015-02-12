cat ipaddress.txt | while read line; do
  adb disconnect $line:5555
done
