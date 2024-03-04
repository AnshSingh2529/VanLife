//  using firebase/firestore of google to store the data
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite"

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
    console.log(dataArr);
    return dataArr; 
}





// export async function getVans(id) {
//     const url = id ? `/api/vans/${id}` : "/api/vans"
//     const res = await fetch(url)
//     if (!res.ok) {
//         throw {
//             message: "Failed to fetch vans",
//             statusText: res.statusText,
//             status: res.status
//         }
//     }
//     const data = await res.json()
//     return data.vans
// }

export async function getHostVans(id) {
    const url = id ? `/api/host/vans/${id}` : "/api/host/vans"
    const res = await fetch(url)
    if (!res.ok) {
        throw {
            message: "Failed to fetch vans",
            statusText: res.statusText,
            status: res.status
        }
    }
    const data = await res.json()
    return data.vans
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