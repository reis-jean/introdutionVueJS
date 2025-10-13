import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDAPDHkKlGB_FMxbwaZ8YncnyBDGdHQ-r0",
    authDomain: "vuehttp-demo-32496.firebaseapp.com",
    projectId: "vuehttp-demo-32496",
    storageBucket: "vuehttp-demo-32496.firebasestorage.app",
    messagingSenderId: "383445947021",
    appId: "1:383445947021:web:9f97a9ca3c1125c0f788c4",
    measurementId: "G-RH3S16MCEB"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };