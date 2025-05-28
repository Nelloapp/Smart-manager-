// firebase-config.js

// 🔑 Configurazione Firebase (i tuoi dati qui)
const firebaseConfig = {
  apiKey: "AIzaSyD0emi-appWJMPluM_0ku4hPe83QQNbM-A",
  authDomain: "sgr-manager-8c3bd.firebaseapp.com",
  projectId: "sgr-manager-8c3bd",
  storageBucket: "sgr-manager-8c3bd.firebasestorage.app",
  messagingSenderId: "540999500288",
  appId: "1:540999500288:web:da8069f764d0dd14ef4ee5",
  measurementId: "G-17KJTGCG97"
};

// Inizializza Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
