// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getAuth,signInWithPopup,GoogleAuthProvider,createUserWithEmailAndPassword,signInWithEmailAndPassword} from 'firebase/auth'
import {getFirestore,doc,getDoc,setDoc, initializeFirestore,collection,writeBatch,query,getDocs} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCg65Pf_tuqJ7BSYplAwbojNipD268qtg0",
    authDomain: "task7-1p-d5ab1.firebaseapp.com",
    projectId: "task7-1p-d5ab1",
    storageBucket: "task7-1p-d5ab1.appspot.com",
    messagingSenderId: "407798010760",
    appId: "1:407798010760:web:6ea54969bd1f5312b4603d"
  };
  
//auth listner


// Initialize Firebase
const firebaseapp = initializeApp(firebaseConfig);
const provider=new GoogleAuthProvider();
const loggedIn=false;
provider.setCustomParameters({
    prompt:"select_account"
});
export const auth=getAuth();
export const signInWithGooglePopup=()=> signInWithPopup(auth,provider);
export const db=getFirestore(firebaseapp);


export const addCollectionAndDocument=async (collectionKey,objectsToAdd,field='key')=>{
    const collectionRef=collection(db,collectionKey)
    const batch=writeBatch(db)
    objectsToAdd.forEach((object)=>{
        const docRef=doc(collectionRef,object[field]);
        batch.set(docRef,object)
    })
    await batch.commit();
    console.log("Transaction is successful")

}
export function logOutFunc(){
    auth.signOut();
}

export const fetchArticlesAndDocuments=async ()=>{
    
    const collectionRef=collection(db,'article')
    const q=query(collectionRef)
    const querySnapshot=await getDocs(q);
    var list=[];
    
    const articleMap=querySnapshot.docs.reduce((acc,docSnapshot)=>{
        const{name,...items}=docSnapshot.data();

    
        acc[name]=items
 
       
        
        list.push(acc[name]=items)
        return list;
    },{})
        

        return articleMap;
        
    
}
export const createUserDocFromAuth=async(userAuth,additonalInformation={})=>{
    if(!userAuth.email) return;
    const userDocRef=doc(db,"users",userAuth.email);
    const userSnapshot=await getDoc(userDocRef);
    if(!userSnapshot.exists()){
        const{name,email}=userAuth;
        const createdAt=new Date();
    
        try{
            await setDoc(userDocRef,{
                name,email,createdAt,
                ...additonalInformation
            })}catch(error){
        console.log(error);
    }
    return userDocRef;
}       
    

}
export const createAuthUserWithEmailAndPassword=async(email,password)=>{
    if(!email || !password) return;
    return await createUserWithEmailAndPassword(auth,email,password);
}
export const signInAuthUserWithEmailAndPassword= async(email,password)=>{
    if(!email || !password){return alert("stupid")};
    return await signInWithEmailAndPassword(auth,email,password);
}
auth.onAuthStateChanged(user=>{
    if(user==null){
        console.log("none logged in")
    }
    else{
        console.log(user)
    }
    
})
