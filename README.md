
# Dianoia - Ionic Mobile app

<p align="center">
<img src="https://raw.githubusercontent.com/scify/Dianoia-app/master/resources/splash.png" width="500">
</p>
<br>

A demo of the app (in Greek) can be found [here](https://scify.github.io/Dianoia-app/#/home).

## Non-pharmaceutical activities for people with dementia.

This project was built using the following versions of nodejs and npm:

```bash
$ node -v
v14.18.1

$ npm -v
6.14.15
```

It is very easy to install multiple versions of nodejs and npm, by using [Node Version Manager (nvm)](https://github.com/creationix/nvm).

## Install project dependencies:

```bash
$ npm install -g @ionic/cli@6.11.11 

$ npm install -g cordova@8.1.2

$ cd dianoia-app

$ npm install

$ ionic serve
```

## Execution
Then, to run it in a real Android device, cd into `dianoia-app` and run:

```bash
$ ionic cordova platform add android@8.1.0

$ ionic cordova emulate android
```

## Building

### Building for Android

#### Java - Gradle
In order to build for Android, Java `1.8` is required, along with Gradle `4.4.1`.

Verify your installations by running:
```bash
java -version

gradle -version
```

#### Firebase Analytics
Since the project uses Firebase Analytics, In order to build for Android you have to put the `google-services.json` file from Firebase Console to the root directory.
The build process will then copy this file to the `platforms/andorid/app` directory.

In order to produce e release build:

```bash
cordova build android --release
```
#### Signing the Android .apk
After the .apk file is built, you can either use Android CLI commands, or just open Android Studio, and sign the .apk.

## Building for Browser

In order to generate a bundled directory that can be hosted as a web application, you need to add and build the `browser` platform:

```bash
$ ionic cordova platform add browser@5.0.4

$ ionic cordova build browser
```

This will generate a `platforms/browse/www` directory that can be uploaded to a server.

### GitHub pages

In order to generate the `docs` directory that can be used from GitHub Pages, you need to run the following script:

```bash
$ npm run build-docs
```

This will generate the `docs` directory. (Note that this directory is and should be under Version Control).

## License

<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

<br>
Copyright 2016

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## Sponsors
Το project “Διάνοια” υλοποιείται από τη <a href="http://www.scify.org/">Μη Κερδοσκοπική Εταιρεία SciFY</a> στο πλαίσιο του προγράμματος “Σημεία Στήριξης” που συγχρηματοδοτείται από το ΤΙΜΑ Κοινωφελές Ίδρυμα, το Κοινωφελές Ίδρυμα Ιωάννη Σ. Λάτση, τη φιλανθρωπική οργάνωση Hellenic Hope και το Ίδρυμα Μποδοσάκη.
  <br>
  <br>
  Περισσότερες πληροφορίες για το έργο <a href="http://www.scify.gr/site/el/impact-areas/assistive-technologies/dianoia">σε αυτόν τον σύνδεσμο.</a>
