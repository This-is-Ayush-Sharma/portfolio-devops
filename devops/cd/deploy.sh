#!/bin/bash
ls
pid=$(lsof -t -i:${1})
if [ -n "$pid" ]; then
    pm2 restart server.js
else
    pwd
    npm install
    pm2 start server.js
fi
