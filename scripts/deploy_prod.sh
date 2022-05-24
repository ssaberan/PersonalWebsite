#!/usr/bin/env sh

set -e

rm -rf dist
npm run build
cd dist

git init
git add -A
git commit -m 'deploy for production'

git push -f git@github.com:ssaberan/ssaberan.github.io.git master

cd -