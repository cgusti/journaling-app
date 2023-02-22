import { useState, useEffect } from "react";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

export function SignIn() {
  return (
    <button
      className="sign_in_button"
      onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}
    >
      Sign In
    </button>
  );
}

export function SignOut() {
  return (
    <div className="sign_out_div">
      Signed in as: {auth.currentUser.displayName} &nbsp;
      <button className="sign_out_button" onClick={() => signOut(auth)}>
        Sign Out
      </button>
    </div>
  );
}

export function useAuthentication() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      user ? setUser(user) : setUser(null);
    });
  }, []);
  return user;
}
