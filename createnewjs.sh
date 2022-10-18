#!/bin/bash


# Ask the user for their name
echo Please add new file name
read -p 'FileName: ' filename
echo
echo You have selected $filename.js


cp template.js $filename.js  