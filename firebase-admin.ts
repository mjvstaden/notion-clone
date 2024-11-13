import {
    initializeApp,
    getApps,
    App,
    getApp,
    cert,
} from "firebase-admin/app"

import { getFirestore } from "firebase/firestore"

var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
