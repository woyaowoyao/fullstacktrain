#!/bin/sh -l

cd app
docker build -t laidongshi/lab09  .
cd ..
docker-compose up

