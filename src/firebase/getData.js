import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";

const colRef = collection(db, "teamMembers");

export async function getData(setGetDataDb) {
  try {
    const docsSnap = await getDocs(colRef);
    setGetDataDb([]);
    if (docsSnap.docs.length > 0) {
      docsSnap.forEach((doc) => {
        let result = [doc.data()];
        setGetDataDb((prev) => {
          if (prev?.length) {
            return [...prev, ...result];
          } else {
            return result;
          }
        });
      });
    }
  } catch (error) {
    console.log(error);
  }
}
