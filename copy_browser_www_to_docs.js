#!/usr/bin/env node

// Copy Browser Code To Docs for Github Pages
// v1.0
// Automatically copies the platform/browser/www/ contents to /docs so that
// the repository can automatically be hosted with Github pages

const shell = require('child_process').execSync;
require('fs');
require('path');

const src = 'www';
const dist = 'docs';
shell(`mkdir -p ${dist}`);
shell(`cp -r ${src}/* ${dist}`);

