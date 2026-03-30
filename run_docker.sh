#!/bin/bash
docker build -f Dockerfile -t js/react-todo-list .
docker run -it --network host -v "$(pwd):/home/js" js/react-todo-list bash
sudo chown -R $USER:$USER *
