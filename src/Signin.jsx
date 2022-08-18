import React from 'react';
import firebase from 'firebase';

const signIn = () =>{
  const provider = new firebase.auth.GoogleAuthProvider();
}

const Signin = () => {
  return(
    <div>
      <button onClick={signIn}>Sign In With Google</button>
    </div>
  )
}
export default Signin;