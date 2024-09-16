#!/bin/bash
ls
pid=$(lsof -t -i:${1})
if [ -n "$pid" ]; then
    pm2 restart server.js
else
    pwd
    npm install
    ls
    pm2 start server.js
fi
