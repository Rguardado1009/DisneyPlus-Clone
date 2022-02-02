const firebaseConfig = {
  apiKey: "AIzaSyB1X_qnxnXvNMa3CeBzVmlzAywLVK_NfP4",
  authDomain: "disney-clone-react-397b8.firebaseapp.com",
  projectId: "disney-clone-react-397b8",
  storageBucket: "disney-clone-react-397b8.appspot.com",
  messagingSenderId: "947154208672",
  appId: "1:947154208672:web:d9e02c14fa0441c9b246c5",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
