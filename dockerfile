FROM ubuntu:22.04
MAINTAINER marco [dot] turi [at] hotmail [dot] it

ENV DEBIAN_FRONTEND=noninteractive \
    ANDROID_HOME=/opt/android-sdk-linux \
    NPM_VERSION=6.14.18 \
    IONIC_CLI_VERSION=6.11.11 \
    CORDOVA_VERSION=8.1.2 \
    GRADLE_VERSION=5.6.2 \
    # Fix for the issue with Selenium, as described here:
    # https://github.com/SeleniumHQ/docker-selenium/issues/87
    DBUS_SESSION_BUS_ADDRESS=/dev/null

# Install basics
RUN apt-get update && apt-get install -y apt-transport-https &&  \
    apt-get install -y git wget curl unzip build-essential && \
    curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
    apt-get update -y --force-yes &&  \
    apt-get install -y nodejs && \
    npm install -g npm@"$NPM_VERSION" cordova@"$CORDOVA_VERSION" @ionic/cli@"$IONIC_CLI_VERSION" && \
    npm cache clear --force && \
    wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
    dpkg --unpack google-chrome-stable_current_amd64.deb && \
    apt-get install -f -y --force-yes && \
    apt-get clean && \
    rm google-chrome-stable_current_amd64.deb && \
    mkdir Sources && \
    mkdir -p /root/.cache/yarn/ && \
    apt-get -qqy install fonts-ipafont-gothic xfonts-100dpi xfonts-75dpi xfonts-cyrillic xfonts-scalable libfreetype6 libfontconfig

# Set the locale
RUN apt-get clean && apt-get update && apt-get install -y locales
RUN echo "LC_ALL=en_US.UTF-8" >> /etc/environment
RUN echo "en_US.UTF-8 UTF-8" >> /etc/locale.gen
RUN echo "LANG=en_US.UTF-8" > /etc/locale.conf
RUN locale-gen en_US.UTF-8

## JAVA INSTALLATION
RUN echo "deb [check-valid-until=no] http://cdn-fastly.deb.debian.org/debian stretch main" > /etc/apt/sources.list.d/stretch.list
RUN echo "deb [check-valid-until=no] http://archive.debian.org/debian stretch-backports main" > /etc/apt/sources.list.d/stretch-backports.list
RUN sed -i '/deb [check-valid-until=no] http:\/\/deb.debian.org\/debian stretch-updates main/d' /etc/apt/sources.list
RUN apt-get -o Acquire::Check-Valid-Until \"false\" update && DEBIAN_FRONTEND=noninteractive apt-get install -y -t stretch-backports --force-yes --no-install-recommends openjdk-8-jdk-headless openjdk-8-jre-headless ca-certificates-java && apt-get clean all

# System libs for android enviroment
RUN echo ANDROID_HOME="${ANDROID_HOME}" >> /etc/environment && \
    dpkg --add-architecture i386 && \
    apt-get update -o Acquire::Check-Valid-Until=false && \
    apt-get install -y --force-yes -t stretch-backports expect ant wget libc6-i386 lib32stdc++6 lib32gcc1 lib32ncurses5 lib32z1 qemu-kvm kmod

RUN apt-get clean && \
    apt-get autoclean && \
    rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN sed 's/deb [check-valid-until=no] http:\/\/archive.debian.org\/debian\/ stretch-backports main//g' /etc/apt/sources.list > /etc/apt/sources.list

# Install Android Tools
RUN    mkdir  /opt/android-sdk-linux && cd /opt/android-sdk-linux && \
    wget --output-document=android-tools-sdk.zip --quiet https://dl.google.com/android/repository/sdk-tools-linux-4333796.zip && \
    unzip -q android-tools-sdk.zip && \
    rm -f android-tools-sdk.zip

# Install Gradle
RUN    mkdir  /opt/gradle && cd /opt/gradle && \
    wget --output-document=gradle.zip --quiet https://services.gradle.org/distributions/gradle-"$GRADLE_VERSION"-bin.zip && \
    unzip -q gradle.zip && \
    rm -f gradle.zip && \
    chown -R root. /opt

# Setup environment
ENV PATH ${PATH}:${ANDROID_HOME}/tools:${ANDROID_HOME}/platform-tools:/opt/gradle/gradle-${GRADLE_VERSION}/bin

# Install Android SDK
RUN yes Y | ${ANDROID_HOME}/tools/bin/sdkmanager "build-tools;29.0.2" "platforms;android-29" "platform-tools"
RUN cordova telemetry off

WORKDIR Sources
EXPOSE 8100 35729
CMD ["ionic", "serve"]