
import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, getDocs
} from 'firebase/firestore'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC12FTCLsSXrqnNz1T5v2PLSTd8fz9-PG8",
  authDomain: "tinker1-da185.firebaseapp.com",
  projectId: "tinker1-da185",
  storageBucket: "tinker1-da185.firebasestorage.app",
  messagingSenderId: "290903351514",
  appId: "1:290903351514:web:01d2894f3bd85c43d145e3",
  measurementId: "G-BMLJY8HR17"
};


// init firebase
initializeApp(firebaseConfig)

// init services

const db = getFirestore()

// collection ref

const colRef = collection(db, 'books')

// get collection data
getDocs(colRef)
  .then((snapshot) => {
    let books = [] // adds new object to the books array
    snapshot.docs.forEach((doc) => {
      books.push({...doc.data(), id: doc.id}) // get data and id

    })
    console.log(books)
  } )
 
 