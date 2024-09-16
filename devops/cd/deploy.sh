#!/bin/bash


if [ -z "$1" ]; then
    echo "Usage: $0 <port>"
    exit 1
fi

PORT=$1

echo "Listing files in the current directory:"
ls


pid=$(lsof -t -i:${PORT})

if [ -n "$pid" ]; then
    echo "Port ${PORT} is occupied. Restarting PM2 process..."
    sudo pm2 restart server
else
    echo "Port ${PORT} is free. Deploying application..."

    echo "Current working directory: $(pwd)"

    echo "Running npm install..."
    npm install

    echo "Listing files after npm install:"
    ls

    echo "Starting PM2 process..."
    sudo pm2 start server.js --name server
fi

# Check PM2 status
echo "Current PM2 process status:"
sudo pm2 status
