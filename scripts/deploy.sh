#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

# use once you have custom domain
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# remove once you have custom domain
git push -f git@github.com:ssaberan/ssaberan.github.io.git master

cd -