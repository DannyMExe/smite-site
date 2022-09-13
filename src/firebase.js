import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';



const app = initializeApp({
	apiKey: "AIzaSyA6ZnqdNyiXKlNScyjTWQqhEBG_Z9N2LuU",
	authDomain: "smite-site.firebaseapp.com",
	projectId: "smite-site",
	storageBucket: "smite-site.appspot.com",
	messagingSenderId: "1023201532447",
	appId: "1:1023201532447:web:1a1899c040df17924b132a",
	measurementId: "G-DVVTN6STH4"
});

export const auth = getAuth(app);
export default app;
