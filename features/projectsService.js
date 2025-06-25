import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";

export const getProjectsService = async () => {
  try {
    const projectsColRef = collection(db, "projects");
    const projectsSnapShot = await getDocs(projectsColRef);
    if (projectsSnapShot.empty) {
      throw new Error("SERVICE | Proje bulunamadı");
    }
    const data = projectsSnapShot.docs.map((doc) => {
      const d = doc.data();
      return {
        id: doc.id,
        name: d.name ?? "",
        used: d.used ?? [],
        github: d.github ?? "",
        live: d.live ?? "",
        image: d.image ?? "",
        video: d.video ?? "",
        description: {
          title: d.description?.title ?? "",
          Features: d.description?.Features ?? [],
          technologies: d.description?.technologies ?? [],
        },
      };
    });

    return data || [];
  } catch (err) {
    throw new Error(`SERVICE | Projeler çekilirken sorun: ${err}`);
  }
};
