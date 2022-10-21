#!/bin/bash
export PATH=/sbin:/bin:/usr/sbin:/usr/bin:/usr/local/sbin:/usr/local/bin

basedir=$(cd `dirname $0`/..; pwd)

checkUser() {
  if [ "`whoami`" == "root" ]; then
   echo "The root user is not allowed to run."
   exit 1
  fi
}
checkUser

jstat=/opt/dtstack/java/bin/jstat

app_name=hiveserver2
app_pid=$(ps aux |grep java |grep org.apache.hive.service.server.HiveServer2 |awk '{print $2}')

echo "app_pid == $app_pid"
$jstat -gcutil $app_pid 1000

