import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
    
        apiKey: "AIzaSyA6GK-201VQryJLNnjtcYvZZ8UIbYS3g1Q",
        authDomain: "clone-5c875.firebaseapp.com",
        projectId: "clone-5c875",
        storageBucket: "clone-5c875.appspot.com",
        messagingSenderId: "46871684794",
        appId: "1:46871684794:web:4a5707c25ee8d85b09c483",
        measurementId: "G-K12C53Z4R2"
      

})


const auth = firebase.auth()

export{auth}                        //authentication stuff in firebase