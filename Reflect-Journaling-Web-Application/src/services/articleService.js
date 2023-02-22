import { db } from "../firebaseConfig";
import {
  collection,
  query,
  getDocs,
  addDoc,
  orderBy,
  limit,
  Timestamp,
  doc,
  deleteDoc,
  setDoc,
} from "firebase/firestore";

export async function createArticleDB({ title, body }) {
  const today = new Date();
  const data = {
    title,
    body,
    date:
      today.getMonth() + 1 + "-" + today.getDate() + "-" + today.getFullYear(),
  };
  const docRef = await addDoc(collection(db, "articles"), data);
  return { id: docRef.id, ...data };
}

export async function deleteArticleDB(id) {
  const dataToDelete = await deleteDoc(doc(db, "articles", id));
  return dataToDelete;
}

export async function editArticleDB(id, body) {
  await setDoc(doc(db, "articles", id), { body }, { merge: true });
  return body;
}

export async function fetchArticles() {
  const snapshot = await getDocs(
    query(collection(db, "articles"), orderBy("date", "desc"))
  );
  const queriedData = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return queriedData;
}
