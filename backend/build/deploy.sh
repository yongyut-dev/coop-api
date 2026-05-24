#!/bin/bash

PROJECT_PATH="/var/www/html/coop-api/backend"

echo "===== START DEPLOY ====="

cd $PROJECT_PATH || exit

echo "===== UPDATE SOURCE ====="

git fetch origin main
git reset --hard origin/main

echo "===== INSTALL BACKEND PACKAGE ====="

npm install

echo "===== BUILD FRONTEND ====="

cd frontend/frontend-backend || exit

npm install


echo "===== BACK TO ROOT ====="

cd $PROJECT_PATH || exit

echo "===== RESTART PM2 ====="

pm2 restart ecosystem.config.js

echo "===== DEPLOY สำเร็จ ====="