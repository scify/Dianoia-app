#!/usr/bin/env node

/**
 * This hook fixes the JCenter/Bintray deprecation issue in Cordova Android.
 * JCenter was shut down in 2021, so we need to:
 * 1. Replace jcenter() with mavenCentral()
 * 2. Remove the bintray plugin references from CordovaLib
 */

const fs = require('fs');
const path = require('path');

module.exports = function(context) {
    const platformRoot = path.join(context.opts.projectRoot, 'platforms/android');

    if (!fs.existsSync(platformRoot)) {
        return;
    }

    console.log('Applying JCenter -> MavenCentral fix for Cordova Android...');

    // Files to fix jcenter -> mavenCentral
    const filesToFix = [
        path.join(platformRoot, 'build.gradle'),
        path.join(platformRoot, 'app/build.gradle'),
        path.join(platformRoot, 'CordovaLib/build.gradle')
    ];

    filesToFix.forEach(function(filePath) {
        if (fs.existsSync(filePath)) {
            let content = fs.readFileSync(filePath, 'utf8');
            content = content.replace(/jcenter\(\)/g, 'mavenCentral()');
            fs.writeFileSync(filePath, content, 'utf8');
            console.log('  Fixed: ' + path.relative(context.opts.projectRoot, filePath));
        }
    });

    // Fix CordovaLib/build.gradle - remove bintray plugin
    const cordovaLibBuildGradle = path.join(platformRoot, 'CordovaLib/build.gradle');
    if (fs.existsSync(cordovaLibBuildGradle)) {
        let content = fs.readFileSync(cordovaLibBuildGradle, 'utf8');

        // Remove bintray and maven plugin dependencies
        content = content.replace(/classpath 'com\.github\.dcendents:android-maven-gradle-plugin:.*'\n/g, '');
        content = content.replace(/classpath 'com\.jfrog\.bintray\.gradle:gradle-bintray-plugin:.*'\n/g, '');

        // Remove plugin applications
        content = content.replace(/apply plugin: 'com\.github\.dcendents\.android-maven'\n/g, '');
        content = content.replace(/apply plugin: 'com\.jfrog\.bintray'\n/g, '');

        // Remove install block
        content = content.replace(/install \{[\s\S]*?\n\}\n/g, '');

        // Remove sourcesJar task
        content = content.replace(/task sourcesJar[\s\S]*?\n\}\n/g, '');

        // Remove artifacts block
        content = content.replace(/artifacts \{[\s\S]*?\n\}\n/g, '');

        // Remove bintray block
        content = content.replace(/bintray \{[\s\S]*?\n\}\n?/g, '');

        fs.writeFileSync(cordovaLibBuildGradle, content, 'utf8');
        console.log('  Removed bintray plugin from CordovaLib');
    }

    console.log('JCenter fix applied successfully!');
};
