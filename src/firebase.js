import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBx-avSSv_M6imCVk4-32g72AMXhlnq22Y",
    authDomain: "e-commerce-eec77.firebaseapp.com",
    projectId: "e-commerce-eec77",
    storageBucket: "e-commerce-eec77.appspot.com",
    messagingSenderId: "786298009618",
    appId: "1:786298009618:web:8eea7e1ac1abc4b6ccc0cb",
    measurementId: "G-XVL6T3DELX"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
