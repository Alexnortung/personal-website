#!/bin/bash

# print outputs and exit on first failure
set -xe

 # setup ssh agent, git config and remote
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/travis_rsa
echo "added ssh-key successfully"

git remote add deploy "travis@nortung.dk:/var/www/nortung.dk/html"
git config user.name "Travis CI"
git config user.email "travis@nortung.dk"
echo "git config updated successfully"

# commit compressed files and push it to remote
rm -f .gitignore
cp .travis/deployignore .gitignore
git add .
git status # debug
git commit -m "Deploy compressed files"
git push -f deploy HEAD