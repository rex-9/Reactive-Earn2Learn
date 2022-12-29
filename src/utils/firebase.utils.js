import { initializeApp } from "firebase/app";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 as uuidV4 } from "uuid";
const firebaseConfig = {
  apiKey: "AIzaSyDQGLM1ju7K7NxatDTPAyH288kzezkHEEI",
  authDomain: "crown-clothing-f79bd.firebaseapp.com",
  projectId: "crown-clothing-f79bd",
  storageBucket: "crown-clothing-f79bd.appspot.com",
  messagingSenderId: "691248366531",
  appId: "1:691248366531:web:1e07e7a1f10ffa853af376",
  measurementId: "G-QX08V77V5F",
};

const app = initializeApp(firebaseConfig);

const storage = getStorage();

export const DownloadFile = async (ImageURL) => {
  const realURL = await getDownloadURL(ref(storage, ImageURL))
    .then((url) => url)
    .catch((error) => {
      console.log(error);
    });
  return realURL;
};
const Uploadfile = async (file) => {
  const ImageURL = "file_" + uuidV4();
  const storageRef = ref(storage, ImageURL);
  await uploadBytes(storageRef, file).then((snapshot) => {
    console.log("Uploaded Image Successfully");
  });
  return ImageURL;
};

export default Uploadfile;
