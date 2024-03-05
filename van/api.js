//  using firebase/firestore of google to store the data
import { initializeApp } from "firebase/app";
import { 
    getFirestore, 
    collection, 
    getDocs, 
    doc, 
    getDoc, 
    query, 
    where } from "firebase/firestore/lite"

const firebaseConfig = {
    apiKey: "AIzaSyApmhDJOoB6dOe_PoJ4VDJwnMcR8UsI3kc",
    authDomain: "vanlifee-45ff4.firebaseapp.com",
    projectId: "vanlife-a1af5",
    storageBucket: "vanlifee-45ff4.appspot.com",
    messagingSenderId: "1023387621309",    
    appId: "1:1023387621309:web:d2418ada6778bccf7f64d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

//Refactoring or Restructuring the fetching data...

const vansCollectionRef = collection(db, "vans");

export async function getVans(){
    const querySnapshot = await getDocs(vansCollectionRef);
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id          //my db unique id's..
    }))
    return dataArr; 
}

// cloud Firebase

export async function getVan(id){
    const docRef = doc(db, "vans", id);
    const vanSnapshot = await getDoc(docRef);
    return {
        ...vanSnapshot.data(),
        id:vanSnapshot.id
    }
    
}


export async function getHostVans(){
    const q = query(vansCollectionRef, where("hostId" , "==" , "123"))
    const querySnapshot = await getDocs(q);
    const dataArr = querySnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id          //my db unique id's..
    }))
    console.log(dataArr);
    return dataArr; 
}

export async function loginUser(creds) {
    const res = await fetch("/api/login",
        { method: "post", body: JSON.stringify(creds) }
    )
    const data = await res.json()

    if (!res.ok) {
        throw {
            message: data.message,
            statusText: res.statusText,
            status: res.status
        }
    }

    return data
}