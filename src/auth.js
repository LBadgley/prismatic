// import { auth, usersRef } from './firebase.js';

// const options = { skipAuth : true };

// const ui = new firebaseui.auth.AuthUI(auth);

// ui.start('#firebase-auth-container', {
//     signInOptions: [
//         firebase.auth.EmailAuthProvider.PROVIDER_ID,
//         firebase.auth.GoogleAuthProvider.PROVIDER_ID
//     ],

//     signInSuccessUrl: '/quiz.html',

//     credentialHelper: firebaseui.auth.CredentialHelper.NONE,
//     callbacks: {
//         signInSuccessWithAuthResult(authResult) {
//             const user = authResult.user;
//             usersRef.child(user.uid)
//                 .set({
//                     uid: user.uid,
//                     displayName: user.displayName,
//                     photoURL: user.photoURL,
//                     quizColor: null
//                 });
//             return true;
//         }
//     }
// });
