#!/bin/bash
set -e
git reset --hard
git pull -X theirs
docker-compose build
docker-compose down
docker-compose up -d
