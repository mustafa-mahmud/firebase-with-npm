import { initializeApp } from 'firebase/app';
import {
  getFirestore,
  collection,
  doc,
  query,
  where,
  orderBy,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  limit,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCgfH758poSF1GheZOYgU4kPF2lVTHGfig',
  authDomain: 'my-first-firebase-projec-8d1dc.firebaseapp.com',
  projectId: 'my-first-firebase-projec-8d1dc',
  storageBucket: 'my-first-firebase-projec-8d1dc.appspot.com',
  messagingSenderId: '362116006707',
  appId: '1:362116006707:web:d33c6071eb0b18c34b3446',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/* add data */
const addData = async () => {
  try {
    const data = await addDoc(collection(db, 'users'), {
      name: 'Ajim',
      age: 15,
    });

    console.log(data.id);
  } catch (error) {
    console.log(error);
  }
};

/* get single data */
const getSingleData = async () => {
  try {
    const docRef = doc(db, 'users', 'm7fxUDNAi8MJCz9rqmad');
    const user = await getDoc(docRef);

    console.log(user.data());
  } catch (error) {
    console.log(error);
  }
};

/* get all data */
const getAllData = async () => {
  try {
    const docRef = collection(db, 'users');
    const users = await getDocs(docRef);

    users.forEach((user) => {
      console.log(user.data());
    });
  } catch (error) {
    console.log(error);
  }
};

/* get all data with "where" query */
const getAllMatchDataWithWhereQuery = async () => {
  try {
    const q = query(collection(db, 'users'), where('age', '==', 15));
    const users = await getDocs(q);

    users.forEach((user) => {
      console.log(user.data());
    });
  } catch (error) {
    console.log(error);
  }
};

/* get all data with "orderby" query */
const getDataWithOrderBy = async () => {
  try {
    const docRef = collection(db, 'users');
    const q = query(docRef, orderBy('age', 'desc'));
    const users = await getDocs(q);

    users.forEach((user) => {
      console.log(user.data());
    });
  } catch (error) {
    console.log(error);
  }
};

/* get all data with "where" + "orderby" + "limit" query */
const getDataWithQuery = async () => {
  try {
    const docRef = collection(db, 'users');
    const q = query(
      docRef,
      where('age', '>', 15),
      orderBy('age', 'desc'),
      limit(2)
    );
    const users = await getDocs(q);

    users.forEach((user) => {
      console.log(user.data());
    });
  } catch (error) {
    console.log(error);
  }
};

/* edit data */
const updateDataWithSetDoc = async () => {
  try {
    const docRef = doc(db, 'users', 'm7fxUDNAi8MJCz9rqmad');
    await updateDoc(docRef, {
      email: 'ah@gmail.com',
    });
  } catch (error) {
    console.log(error);
  }
};

/* delete data */
const deleteData = async () => {
  try {
    const docRef = doc(db, 'users', 'xLzN9qOhY5CLqNeRStkG');
    await deleteDoc(docRef);
  } catch (error) {
    console.log(error);
  }
};

// addData();
// getSingleData();
getAllData();
// getAllMatchDataWithWhereQuery();
// getDataWithQuery();
// updateDataWithSetDoc();
// deleteData();
