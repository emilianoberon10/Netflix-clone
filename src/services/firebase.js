import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAlRYPXc0B3QWAf_s1JfnCz2-ThrSB9i_4',
  authDomain: 'netflix-clone-6ff69.firebaseapp.com',
  projectId: 'netflix-clone-6ff69',
  storageBucket: 'netflix-clone-6ff69.appspot.com',
  messagingSenderId: '670868904276',
  appId: '1:670868904276:web:f963d7e16214453938d0c1',
  measurementId: 'G-6HSRW32ZFW',
}

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage }
