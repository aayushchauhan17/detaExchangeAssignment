import { doc, deleteDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export async function deleteData(data) {
  try {
    await deleteDoc(doc(db, "teamMembers", `${data.name}_${data.company}`));
  } catch (e) {
    console.log(e);
  }
}
