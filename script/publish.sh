#!/bin/sh

cp LICENSE > dist/LICENSE
cp README.md > dist/README.md
jq 'del(.devDependencies) | del(.scripts) | del(."lint-staged")' package.json > dist/package.json
yarn publish ./dist
