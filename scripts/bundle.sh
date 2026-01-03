#!/usr/bin/env bash

# build bundle
BUNDLE=true npm run build -- --base=./

# compress directory into single archive
if [[ $CI != 'true' ]]; then
  zip -r "dist/$(npm pkg get name | tr -d \")-$(npm pkg get version | tr -d \").zip" dist
  echo
  find dist -type f -name '*.zip'
  open dist
fi
