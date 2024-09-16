#!/bin/bash
ls
pid=$(lsof -t -i:${1})
if [ -n "$pid" ]; then
    sudo pm2 restart server.js -y &
    disown
else
    pwd
    npm install
    sudo pm2 start server.js -y &
    disown
fi
