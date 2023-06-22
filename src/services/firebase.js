import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { getStorage, ref, deleteObject } from "firebase/storage";
import { firebaseConfig } from "../config.js";

firebase.initializeApp(firebaseConfig);

const storageRef = firebase.app().storage().ref();
const storage = getStorage();

export async function uploadImg( nameFolder, nameImg, imgBase64 ){
    try {
        let response = await storageRef.child( nameFolder+"/"+nameImg )
            .putString(imgBase64, "data_url");
        
        return await response.ref.getDownloadURL();
    } catch (error) {
        console.log("Service upload img error: ", error);
        return error;
    }
}

export async function deleteImg( url ){
    const httpReference = await ref( storage, url );

    try {
        await deleteObject( httpReference );
    } catch (error) {
        console.log("ERROR delete img:", error);
        return error;
    }

}