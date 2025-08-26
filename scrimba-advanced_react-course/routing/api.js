import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAIZ3lt9XRwJRzIsRHplNwFRjw-cz-D0Zw",
  authDomain: "codepunk-430e2.firebaseapp.com",
  projectId: "codepunk-430e2",
  storageBucket: "codepunk-430e2.firebasestorage.app",
  messagingSenderId: "1030300197",
  appId: "1:1030300197:web:145c275e2a200ccf4c15cc"
};

const app = initializeApp(firebaseConfig);





function sleep(ms) {
    return new Promise(resolve => setTimeout(() => resolve(), ms))
}

export async function getVans(id) {
    const url = id ? `/api/vans/${id}` : "/api/vans"
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