#!/bin/bash 
git status
git add .
git commit -m $(date +%s)
git push origin main
