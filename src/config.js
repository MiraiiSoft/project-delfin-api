import { config } from 'dotenv';
config();

export const firebaseConfig = {
    apiKey: process.env.firebaseApiKey || "",
    authDomain: process.env.firebaseAuthDomain || "",
    projectId: process.env.firebaseProjectId || "",
    storageBucket: process.env.firebaseStorageBucket ||  "",
    messagingSenderId: process.env.firebaseMessagingSenderId || "",
    appId: process.env.firebaseAppId || "",
    measurementId: process.env.firebaseMeasurementId || ""
}

export const glob = {
    apiUrl: process.env.API_URL || "",
    emailAlerts: process.env.EMAIL_ALERTS || ""
}