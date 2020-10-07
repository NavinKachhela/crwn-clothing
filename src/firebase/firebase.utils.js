import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyBZXHzxHLnRLnKhl1zgPTf3UH88mOKS0vw",
    authDomain: "crwn-db-91625.firebaseapp.com",
    databaseURL: "https://crwn-db-91625.firebaseio.com",
    projectId: "crwn-db-91625",
    storageBucket: "crwn-db-91625.appspot.com",
    messagingSenderId: "33107190676",
    appId: "1:33107190676:web:2aebbed3b05c221ac72581"
  };
  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const { displayName, email} = userAuth;
      const createAt = new Date();

      try{
        await userRef.set({
          displayName,
          email,
          createAt,
          ...additionalData
        })
      }catch(error){
       console.log('error creating user',error.message);   
      }
    }
    return userRef;
  };


  export const addCollectionAndDocuments = (collectionKey,objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);
  }

 
  
  
  
  
  
  
  
  
  
  
  
  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);
  export default firebase;