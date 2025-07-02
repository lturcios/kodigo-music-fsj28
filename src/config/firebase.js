import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// configuración de la aplicación en Firebase
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDER,
  appId: import.meta.env.VITE_FIREBASE_APPID
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar el servicio de autenticación
export const auth = getAuth(app);









