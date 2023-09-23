import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZ2b9QN9nHggb8fRX43t2a95y__ui-MZQ",
  authDomain: "wellmindpro-bf734.firebaseapp.com",
  projectId: "wellmindpro-bf734",
  storageBucket: "wellmindpro-bf734.appspot.com",
  messagingSenderId: "1036166111635",
  appId: "1:1036166111635:web:754f3efa0d987c34d1c866"
};

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

//AIzaSyC0Z7ZDf6mw_5ecWIdJuvF54suMe8iKwnw
