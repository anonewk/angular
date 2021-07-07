// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  firebaseConfig: {
    apiKey: 'AIzaSyAwZ5MMAgsj4IdNZ2yyR3qdp4aKbJJ3RNs',
    authDomain: 'eval-pwa-firebase.firebaseapp.com',
    projectId: 'eval-pwa-firebase',
    storageBucket: 'eval-pwa-firebase.appspot.com',
    messagingSenderId: '958711631977',
    appId: '1:958711631977:web:868ca55570aa06241112f8'
  },

  firebaseMessage: {
    'auth/user-not-found': `Identifiants incorrect`,
    'auth/invalid-email': `Le champ email n'est pas correctement formatté`,
    'auth/wrong-password': `Mot de passe incorrect`,
    'auth/weak-password': `Le mot de passe doit contenir au moins 6 caractères`,
    'auth/email-already-in-use': `Cette adresse mail est déjà utilisé !`
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
