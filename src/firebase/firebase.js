import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA8A9WtdGvPgNb8h99kSGHA_GSMZAYoris",
  authDomain: "whatsapp-clone-9dab2.firebaseapp.com",
  projectId: "whatsapp-clone-9dab2",
  storageBucket: "whatsapp-clone-9dab2.firebasestorage.app",
  messagingSenderId: "692979363913",
  appId: "1:692979363913:web:4768cfae2ea1c4476b4f98",
  measurementId: "G-12XHCDYW5R"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
