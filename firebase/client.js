import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCXHs3qOQ3yfKe_QWeo1CYuqS0tSTVsSLA",
  authDomain: "devter-demo.firebaseapp.com",
  projectId: "devter-demo",
  storageBucket: "devter-demo.appspot.com",
  messagingSenderId: "275955513466",
  appId: "1:275955513466:web:1ab1e982ae49c4c8cb23c3",
  measurementId: "G-THHEH1KCJS",
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL } = user

  return {
    avatar: photoURL,
    username: displayName,
    email,
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizedUser = mapUserFromFirebaseAuthToUser(user)
    onChange(normalizedUser)
  })
}

export const loginWithGitHub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithPopup(githubProvider)
}
