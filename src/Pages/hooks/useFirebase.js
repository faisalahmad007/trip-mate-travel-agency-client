import { getAuth, signInWithPopup, GoogleAuthProvider,signOut ,onAuthStateChanged,signInWithEmailAndPassword, createUserWithEmailAndPassword,sendEmailVerification,updateProfile } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializeAuthentication from "../Firebase/firebase.init";


initializeAuthentication();

const useFirebase = () => {
    
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const[user,setUser] = useState({});
    const[checkPassword,setCheckPassword] = useState("");
    const[error,setError] = useState('');
    
    const[isLoading,setIsLoading] = useState(true);
   

    
    
   //google login
    const signInUsingGoogle=()=>{
        setIsLoading(true);
       return signInWithPopup(auth , googleProvider)
        .then((result) =>{
            
         } )
         .finally(() => setIsLoading(false))
            
    }
    useEffect(()=>{
       const unsubscribed = onAuthStateChanged(auth, (user) =>{
            if(user){
               setUser(user);
               const uid = user.uid;
            }
            else{
                setUser("");
            }
            setIsLoading(false);
        });
        return ()=> unsubscribed;
    } , [])
   
   const checkRegistration = (event) => {
    event.preventDefault();
    if(checkPassword.length <6){
        setError('Password Must Be at least 6 characters');
        return;
    }
    if(!/(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/.test(checkPassword)){
           setError('Password must contain upper case');
           return;
    }
       

   }


   const handleUserLogin = (email,password) => {
    signInWithEmailAndPassword(auth, email, password)
  .then((result) => {
    
    const user = result.user;
    setError('');
  })
  .catch((error) => {
    
    setError(error.message);
  });

   }


   const handleRegistration = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(result =>{
        const user = result.user;
        
        setError('');
        verifyEmail();
        setUserName();
    })
    .catch((error) => {
       
       setError(error.message);
 
      });
   }


   const verifyEmail = () => {
       sendEmailVerification(auth.currentUser)
       .then(result =>{
           console.log(result);
       })

   }

   const setUserName = () => {
       updateProfile(auth.currentUser,{
           email: user}).then(result =>{

           })
           
       }
       
   
    
   const logOut = ()=>{
       setIsLoading(true);
    signOut(auth)
    .then(() => {
        setUser({})
    })
    .finally(() =>setIsLoading(false))
}

   

    return {
       user,
       setUser,
       signInUsingGoogle,
       handleRegistration,
       handleUserLogin,
       checkRegistration,
       isLoading,
       logOut,
       error,
       setError,
    }
}
 export default useFirebase;