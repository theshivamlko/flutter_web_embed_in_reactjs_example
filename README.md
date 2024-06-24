# flutterapp

A new Flutter project.

## Getting Started

React app is the starting point, first create a build of Flutter Web and include this in React app. ReactJs and Flutter env be pre installed before proceeding.
During development you can automate these commands, Follow Steps:

1. Open `flutterapp` in terminal
2. Run command `flutter build web`
3. Copy content of folder `build/web` and Paste in `my-app/public`
4. Now convert `lib/web/jsScript.dart` to `my-app/public/jsScript.dart`
5. Run command in `flutterapp` folder, `dart compile js -o ../my-app/public/jsScript.js lib/web/jsScript.dart`
6. Now lets start our app
7. Open `my-app` in terminal launch reactjs app using `npm start`

