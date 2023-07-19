function toggleMenu() {
    var navbarMenu = document.querySelector('.navbar-menu');
    navbarMenu.style.display = navbarMenu.style.display === 'block' ? 'none' : 'block';
  }

  // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxIYV6GJbwcg9TKdSbhWCN3X3WXXK0EWk",
  authDomain: "quick-connect-app-40ef2.firebaseapp.com",
  projectId: "quick-connect-app-40ef2",
  storageBucket: "quick-connect-app-40ef2.appspot.com",
  messagingSenderId: "527717734334",
  appId: "1:527717734334:web:7ad79cfd20dfd603774bef",
  measurementId: "G-K78LLKVFYS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);1