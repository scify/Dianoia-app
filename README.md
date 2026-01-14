
# Dianoia - Ionic Mobile app

<p align="center">
<img src="https://raw.githubusercontent.com/scify/Dianoia-app/master/resources/splash.png" width="500">
</p>
<br>

A demo of the app (in Greek) can be found at [scify.github.io/Dianoia-app](https://scify.github.io/Dianoia-app/#/home).

## Non-pharmaceutical activities for people with dementia

## Pre-setup steps

This is a legacy Ionic 3 / Cordova 8 project that requires specific older versions of tools. Follow these steps carefully.

### 1. Node.js

It is very easy to install multiple versions of NodeJS and npm, by using [Node Version Manager (nvm)](https://github.com/creationix/nvm).

This project was built using the following versions of nodejs and npm:

```bash
node -v
v14.21.1

npm -v
6.14.17
```

If you are using [`nvm`](https://github.com/nvm-sh/nvm), run this command in order to sync to the correct NodeJS version for the project:

```bash
nvm install
nvm use
```

### 2. Java 8

This project requires **Java 8 (1.8)** - newer versions are not compatible with Gradle 4.x.

Install OpenJDK 8:

```bash
sudo apt update
sudo apt install openjdk-8-jdk
```

If you have multiple Java versions installed, select Java 8 as the default:

```bash
sudo update-alternatives --config java
sudo update-alternatives --config javac
```

### 3. Gradle 4.10.3

Install Gradle 4.10.3 manually:

```bash
cd /opt
sudo wget https://services.gradle.org/distributions/gradle-4.10.3-bin.zip
sudo unzip gradle-4.10.3-bin.zip
sudo rm gradle-4.10.3-bin.zip
```

### 4. Android SDK

Install Android Studio from [developer.android.com](https://developer.android.com/studio) which includes the Android SDK.

The SDK is typically installed at `~/Android/Sdk`.

### 5. Environment Variables

Add the following to your `~/.bashrc` (or `~/.zshrc`):

```bash
# Java
export JAVA_HOME=/usr/lib/jvm/java-8-openjdk-amd64

# Gradle
export GRADLE_HOME=/opt/gradle-4.10.3

# Android SDK
export ANDROID_SDK_ROOT=$HOME/Android/Sdk
export ANDROID_HOME=$HOME/Android/Sdk

# PATH
export PATH=$PATH:$JAVA_HOME/bin
export PATH=$PATH:$GRADLE_HOME/bin
export PATH=$PATH:$ANDROID_SDK_ROOT/emulator
export PATH=$PATH:$ANDROID_SDK_ROOT/platform-tools
export PATH=$PATH:$ANDROID_SDK_ROOT/cmdline-tools/latest/bin
```

Reload your shell configuration:

```bash
source ~/.bashrc
```

Verify your setup:

```bash
java -version    # Should show 1.8.x
gradle -v        # Should show 4.10.3
echo $ANDROID_SDK_ROOT  # Should show your SDK path
```

## Install project dependencies

```bash
npm install -g @ionic/cli@6.11.11 

npm install -g cordova@8.1.2

cd dianoia-app

npm install

ionic serve
```

## Execution

Then, to run it in a real Android device, cd into `dianoia-app` and run:

```bash
ionic cordova platform add android@8.1.0

ionic cordova emulate android
```

## Generating icon and splash screen for all platforms

Update the following files:

`resources/icon.png`

and

`resources/splash.png`

And then run

```bash
ionic cordova resources
```

To generate the icon and splash screen files for all platforms and dimensions. For more info read [this page](https://ionicframework.com/docs/cli/commands/cordova-resources).

## Building

### How to change app version before building for release

The app has several places where the app version is defined. Change the following:

1. In the `config.xml` file, change the `android-versionCode` parameter, as well as the `version` (`widget` tag).
2. Change the `version` in `package.json` file.
3. Change the `APP_VERSION` constant, defined in `src/consts.ts` file.

### Building for Android

#### Prerequisites

Make sure you have completed the [Pre-setup steps](#pre-setup-steps) section, including:
- Java 8 (1.8)
- Gradle 4.10.3
- Android SDK with environment variables configured

Verify your setup:

```bash
java -version    # Should show 1.8.x
gradle -v        # Should show 4.10.3
```

#### Firebase Analytics

Since the project uses Firebase Analytics, In order to build for Android you have to put the `google-services.json` file from Firebase Console to the root directory.
The build process will then copy this file to the `platforms/android/app` directory.

### Creating the platform files

In order to build the android platform, you will need the correct version of the cordova-android plugin:

```bash
ionic cordova platform rm android

ionic cordova platform add android@8.1.0
```

### Building the Android project

After adding the Android platform, you need to fix the Gradle configuration because **JCenter/Bintray was shut down in 2021**.

Open `platforms/android/CordovaLib/build.gradle` and make these changes:

1. Replace `jcenter()` with `mavenCentral()` in all `repositories` blocks
2. Remove the bintray plugin dependencies and configuration

The `buildscript` section should look like this:

```gradle
buildscript {
    repositories {
        google()
        mavenCentral()
    }

    dependencies {
        classpath 'com.android.tools.build:gradle:3.3.0'
    }
}

allprojects {
    repositories {
        google()
        mavenCentral()
    }
}

apply plugin: 'com.android.library'
```

Also remove the `install { ... }` and `bintray { ... }` blocks at the end of the file (they were for publishing to Bintray which no longer exists).

Similarly, replace `jcenter()` with `mavenCentral()` in:
- `platforms/android/build.gradle`
- `platforms/android/app/build.gradle`

Then, you can build the Android project by running:

```bash
ionic cordova build android
```

The `build` command will generate a full Android project, located in `platforms/android`. This project can then be opened in Android Studio, in order to build and produce the .aap (bundle) or the .apk files.

If you want to build a release version:

```bash
ionic cordova build android --release
```

### Signing the Android .apk

After the android project is built, you can either use Android CLI commands, or just open Android Studio, and sign the .apk or .aap (bundle) file.

#### Manual Signing

In order to sign the unsigned .apk, run:

```bash
cd platforms/android/app/build/outputs/apk/release

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore /path/to/SciFY.keystore app-release-unsigned.apk SciFY

/home/paul/Android/Sdk/build-tools/32.0.0/zipalign -v 4 app-release-unsigned.apk app-release-signed.apk

/home/paul/Android/Sdk/build-tools/32.0.0/apksigner sign --ks /path/to/SciFY.keystore --v1-signing-enabled true --v2-signing-enabled true app-release-signed.apk
```

Then, upload the `app-release-signed.apk` to the Google Play Developer Console.

## Build for Browser

In order to generate a bundled directory that can be hosted as a web application, you need to add and build the `browser` platform:

```bash
ionic cordova platform add browser@5.0.4

ionic cordova build browser
```

If you want to reset the browser platform:

Automated way:

```bash
npm run build-browser
```

Manual way:

```bash
ionic cordova platform rm browser

ionic cordova platform add browser@5.0.4

ionic cordova build browser
```

This will generate a `platforms/browser/www` directory that can be uploaded to a server.

### GitHub pages

In order to generate the `docs` directory that can be used from GitHub Pages, you need to run the following script:

```bash
npm run build-docs
```

This will generate the `docs` directory. (Note that this directory is and should be under Version Control).

## License

Icons made by [Freepik](http://www.freepik.com) from [www.flaticon.com](http://www.flaticon.com) is licensed by [CC 3.0 BY](http://creativecommons.org/licenses/by/3.0/)

Copyright 2016

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Sponsors

Το project “Διάνοια” υλοποιείται από τη [Μη Κερδοσκοπική Εταιρεία SciFY](http://www.scify.org/) στο πλαίσιο του προγράμματος “Σημεία Στήριξης” που συγχρηματοδοτείται από το ΤΙΜΑ Κοινωφελές Ίδρυμα, το Κοινωφελές Ίδρυμα Ιωάννη Σ. Λάτση, τη φιλανθρωπική οργάνωση Hellenic Hope και το Ίδρυμα Μποδοσάκη.
<br>
<br>
Περισσότερες πληροφορίες για το έργο [σε αυτόν τον σύνδεσμο.](http://www.scify.gr/site/el/impact-areas/assistive-technologies/dianoia)
