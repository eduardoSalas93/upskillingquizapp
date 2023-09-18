# upskillingquizapp

react native application for bench upskilling

## Relevant Technologies/Projects

- [Expo](https://docs.expo.dev/) as app wrapper
- [React Native](https://reactnative.dev/docs/getting-started) as user interface
- [Node](https://nodejs.org/) as server side renderer
- [Typescript](https://www.typescriptlang.org/) as programing language
- [React navigation](https://reactnavigation.org/) as main navigation flow

## Getting Started

First, clone the project and execute on the terminal:

```bash
# To ensure you're on the correct node version
nvm use

# Install project dependencies
yarn install
```

Then, synchronize the local data with the server in order to get the latest changes

Run the project

If the app doesn't appear on the device, re-run the command. i.e: `yarn ios`

### iOS

iOS simulator device version **TBD**

In order to run the project on iOS, is necessary to install [Xcode](https://developer.apple.com/xcode/), install the Xcode cli tools and accept the terms.

```bash
# install xcode cli
xcode-select --install

#run the project
yarn ios
```

### Android

Android simulator device version **TBD**

In order to run the project on iOS, is necessary to install the android tools and create an emulator. It is recommended to install [Android Studio](https://developer.android.com/studio),

- Create a device
  Go to Tools > Device Manager

Then,

```bash
#run the project
yarn android
```

### Running on device

To run on your device, you can download Expo Go [from the Apple App Store](https://itunes.apple.com/app/apple-store/id982107779) or [from the Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent&referrer=www).

- On your iPhone or iPad, open the default Apple "Camera" app and scan the QR code you see in the terminal.
- On your Android device, press "Scan QR Code" on the "Home" tab of the Expo Go app and scan the QR code you see in the terminal.

[More info](https://docs.expo.dev/workflow/run-on-device/)
