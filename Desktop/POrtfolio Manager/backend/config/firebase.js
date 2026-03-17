import admin from "firebase-admin";

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');

const db = admin.firestore();
export default db;