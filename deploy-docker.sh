#!/usr/bin/env bash

docker build -t chocoblast .
docker stop chocoblast
docker rm chocoblast
docker run --privileged=true -P -d --name chocoblast chocoblast