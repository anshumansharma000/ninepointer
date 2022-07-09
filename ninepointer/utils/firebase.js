import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCcMYDMXTxs2wSuaxV9GDqc-Lc23u-37tE',
  authDomain: 'ninepointer-staging.firebaseapp.com',
  projectId: 'ninepointer-staging',
  storageBucket: 'ninepointer-staging.appspot.com',
  messagingSenderId: '1026828790155',
  appId: '1:1026828790155:web:c16dee67cee37b931aa78e',
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
