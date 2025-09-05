import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore/lite"

// database is named 'vanlife'. if you're gonna use it for another projects, it's better to rename it to 'codepunk' then
const firebaseConfig = {
  apiKey: "",
  authDomain: "codepunk-430e2.firebaseapp.com",
  projectId: "codepunk-430e2",
  storageBucket: "codepunk-430e2.firebasestorage.app",
  messagingSenderId: "1030300197",
  appId: "1:1030300197:web:145c275e2a200ccf4c15cc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

const vansCollectionRef = collection(db, "vans")


function sleep(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
}

export async function getVans() {
    const snapshot = await getDocs(vansCollectionRef)
    const vans = snapshot.docs.map(
        doc => ({
            ...doc.data(),
            id: doc.id
        })
    )
    return vans
}

export async function getVan(id) {
    const docRef = doc(db, "vans", id)
    const snapshot = await getDoc(docRef)
    const van = {
        ...snapshot.data(),
        id: snapshot.id
        }
    return van
}

export async function getHostVans() {
    const q = query(vansCollectionRef, where("hostId", "==", "123"))
    const snapshot = await getDocs(q)
    const vans = snapshot.docs.map(
        doc => ({
            ...doc.data(),
            id: doc.id
        })
    )
    return vans
}

/* export async function getHostVans(id) {
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
} */

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