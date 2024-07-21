import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBQoJzLXmakyPdsP6XxRQrka6wAq4eEQ2o",
    authDomain: "vueblog-25476.firebaseapp.com",
    projectId: "vueblog-25476",
    storageBucket: "vueblog-25476.appspot.com",
    messagingSenderId: "352881342680",
    appId: "1:352881342680:web:f8aa333d57488788817fad"
};

firebase.initializeApp(firebaseConfig)

const projectFirestore = firebase.firestore()

export { projectFirestore }
