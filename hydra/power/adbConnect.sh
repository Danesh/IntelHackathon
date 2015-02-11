./getIpAddress.sh

cat ipaddress.txt | while read line; do
  adb connect  $line:5555
done
