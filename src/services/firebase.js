import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import { getStorage, ref, deleteObject } from "firebase/storage";

const storageRef = firebase.app().storage().ref();
const storage = getStorage();

export async function uploadImg( nameFolde, nameImg, imgBase64 ){

}