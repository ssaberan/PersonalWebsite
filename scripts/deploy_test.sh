#!/usr/bin/env sh

set -e

rm -rf dist
npm run build
cd dist

git init
git add -A
git commit -m 'deploy for testing'

git push -f git@github.com:ssaberan/TestEnvironment.git master

cd -