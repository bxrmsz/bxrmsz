// FIREBASE CONFIGURATION & INITIALIZATION
const firebaseConfig = {
  apiKey: "AIzaSyDNMyLK7ETCYRxmFuuIWlGqZBMCi6-uM4s",
  authDomain: "my-smm-pannel-56a68.firebaseapp.com",
  databaseURL: "https://my-smm-pannel-56a68-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "my-smm-pannel-56a68",
  storageBucket: "my-smm-pannel-56a68.firebasestorage.app",
  messagingSenderId: "669926794608",
  appId: "1:669926794608:web:b2e26d6b1f88339685dbb5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export Auth & DB globally
const auth = firebase.auth();
const db = firebase.database();

// ImgBB API Key (Global)
const IMGBB_KEY = "172dabb7ec93ead71d6b9e5631f3155d";

console.log("Firebase Connected via firebase.js");