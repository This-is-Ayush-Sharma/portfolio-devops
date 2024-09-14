#!/bin/bash
pid=$(lsof -t -i:${1})
if [ -n "$pid" ]; then
    echo "Killing process $pid using port ${1}"
    kill -9 $pid
fi

nohup serve -s build -l ${1} > serve.log 2>&1 &
disown