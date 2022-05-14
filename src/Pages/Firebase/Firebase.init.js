// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
const firebaseConfig = {
  /* apiKey:process.env.RECT_APP_API_KEY,
  authDomain:process.env.RECT_APP_AUTH_DOMAIN ,
  projectId:process.env.RECT_APP_PROJECT_ID ,
  storageBucket: process.env.RECT_APP_STORAGE_BUCKET,
  messagingSenderId:process.env.RECT_APP_MESSAGING_SENDER_ID ,
  appId:process.env.RECT_APP_APP_ID  */
  apiKey: "AIzaSyBPEjySURRzIaz5oqyyKnA-MRszBNWNaOc",
  authDomain: "doctors-protal-a6ac4.firebaseapp.com",
  projectId: "doctors-protal-a6ac4",
  storageBucket: "doctors-protal-a6ac4.appspot.com",
  messagingSenderId: "477469410331",
  appId: "1:477469410331:web:6773e203cf99fc24ac64be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;