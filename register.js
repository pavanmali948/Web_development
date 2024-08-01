import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyBNORzm3CjOV-4q-eN8ON3R-LvxoTHqAL8",
    authDomain: "gym-website-b3c03.firebaseapp.com",
    projectId: "gym-website-b3c03",
    storageBucket: "gym-website-b3c03.appspot.com",
    messagingSenderId: "23501478291",
    appId: "1:23501478291:web:83e2b8472af6adb12cf066",
};

const app = initializeApp(firebaseConfig);

const submit = document.getElementById("submit");
submit.addEventListener("click", function(e){
  e.preventDefault();
  const auth = getAuth();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      alert("Account created successfully");
      window.location.href = "about.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      let errorMessage = error.message;
      if (errorCode === "auth/email-already-in-use") {
        errorMessage = "The email address is already in use by another account.";
      } else if (errorCode === "auth/weak-password") {
        errorMessage = "The password is too weak.";
      }
      alert(errorMessage);
      // Handle other errors as needed
    });
});
