// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBMy5ul7w2OdDc1Bgv_aTZh71_lTfS9kvQ",
    authDomain: "habitstracker-10036.firebaseapp.com",
    databaseURL: "https://habitstracker-10036-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "habitstracker-10036",
    storageBucket: "habitstracker-10036.appspot.com",
    messagingSenderId: "1010700562331",
    appId: "1:1010700562331:web:d49ae1e9a28a79e9fdfb3e",
    measurementId: "G-VE8MYLFDLW"
  },
  collections: {
    habits: '/habits'
  }

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
