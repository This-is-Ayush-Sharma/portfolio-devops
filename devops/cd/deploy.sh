#!/bin/bash
pid=$(lsof -t -i:${1})
if [ -n "$pid" ]; then
    echo "Killing process $pid using port ${1}"
    kill -9 $pid
fi
pwd
npx http-server -p 3000 -y &
disown