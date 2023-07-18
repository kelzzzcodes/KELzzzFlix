import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey:'AIzaSyArHPKnn1iunWAdlzTvV1yfBWbQigMxvYc',
  authDomain:'netflixclone-d98aa.firebaseapp.com',
  projectId:'netflixclone-d98aa',
  storageBucket:'netflixclone-d98aa.appspot.com',
  messagingSenderId:'900123001871',
  appId:'1:900123001871:web:f87f1e3396f69649fe8f7a'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export {app, auth, db}