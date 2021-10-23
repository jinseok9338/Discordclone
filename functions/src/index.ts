import functions = require("firebase-functions");
import admin = require("firebase-admin");
admin.initializeApp();
const db = admin.firestore();

exports.writeToFirestore = functions.firestore
  .document("users/{userId}")
  .onWrite((change, context) => {
    const authUserId = context.auth?.uid;
    const OldfriendsRequest = change.before.data()!
      .friendsRequestSent as string[];
    const NewfriendsRequest = change.after.data()!
      .friendsRequestSent as string[];
    const userId = NewfriendsRequest.filter(
      (userId) => !OldfriendsRequest.includes(userId)
    )[0];
    db.doc(`users/${userId}`).update({
      friendsRequest: admin.firestore.FieldValue.arrayUnion(authUserId),
    });
  });
