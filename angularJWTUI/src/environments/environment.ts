// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  resourceUrl: 'http://localhost:8080/user/resource',
  baseUserUrl: 'http://localhost:8080/user',
  basePublicUrl: 'http://localhost:8080/public',
  firebase:{
    apiKey: "AIzaSyAvlrNAfMB6yP6efAhKc_AQ-zZz5XVLyoQ",
    authDomain: "myfirebasetest-1c536.firebaseapp.com",
    databaseURL: "https://myfirebasetest-1c536.firebaseio.com",
    projectId: "myfirebasetest-1c536",
    storageBucket: "myfirebasetest-1c536.appspot.com",
    messagingSenderId: "28712358845",
    appId: "1:28712358845:web:19d3e3886c56cace36f8d4",
    measurementId: "G-9QNM3B0F8R"
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
