#!/bin/bash
set -e

rm -rf out || exit 0;

mkdir -p out;

bash test.sh

# go to the out directory and create a *new* Git repo
cd out
git init

# inside this git repo we'll pretend to be a new user
git config user.name "Travis CI"
git config user.email "frogcat@users.noreply.github.com"

git add .
git commit -m "Deploy to GitHub Pages"
# git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1

git push "https://${GH_TOKEN}@${GH_REF}" master:gh-pages
