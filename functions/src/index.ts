import functions = require('firebase-functions');
import admin = require('firebase-admin');

admin.initializeApp();



exports.myFunction = functions.firestore
    .document('users/{docId}')
    .onWrite((change, context) => {
        const newValue = change.after.data()?.friendsRequestSent
        

    });