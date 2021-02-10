import firebase from 'firebase/app'
import 'firebase/firestore'

const app = firebase.initializeApp({
  apiKey: 'AIzaSyARBCfEb1R4WVp1qFSX4-tMYPUa4KKbRnk',
  authDomain: 'coder-class.firebaseapp.com',
  projectId: 'coder-class',
  storageBucket: 'coder-class.appspot.com',
  messagingSenderId: '815895772391',
  appId: '1:815895772391:web:3de3c3774d762c5bee3642',
})

const getFirestore = () => {
  return firebase.firestore(app)
}

export default getFirestore
