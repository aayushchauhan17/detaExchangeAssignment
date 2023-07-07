import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebaseConfig";

export async function pushDataToDb(data) {
  try {
    await setDoc(doc(db, "teamMembers", `${data.name}_${data.company}`), data);
  } catch (e) {
    console.log(e);
  }
}
