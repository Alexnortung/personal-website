#!/bin/bash

# print outputs and exit on first failure
set -xe

# setup ssh agent, git config and remote
eval "$(ssh-agent -s)"
ssh-add $SSH_KEY_FOR_NORTUNGDK
echo "added ssh-key successfully"

git remote add deploy "jenkins@nortung.dk:/var/www/nortung.dk"
git config user.name "Jenkins CI"
git config user.email "jenkins@nortung.dk"
echo "git config updated successfully"

# commit compressed files and push it to remote
rm -f .gitignore
cp .jenkins/deployignore .gitignore
git add .
git status # debug
git commit -m "Deploy compressed files"
git push -f -u deploy HEAD:master