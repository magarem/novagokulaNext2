#!/bin/bash 
echo "$*" 
git status
git add .
git commit -m "$*"