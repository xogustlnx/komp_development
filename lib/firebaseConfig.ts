// lib/firebaseConfig.ts
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4P_uSqcEdP7RB9x2RWqiNRaXZ2ymVYRI",
  authDomain: "komp-development.firebaseapp.com",
  projectId: "komp-development",
  storageBucket: "komp-development.firebasestorage.app",
  messagingSenderId: "231039020821",
  appId: "1:231039020821:web:091b6842e4727f22dd831c",
  measurementId: "G-4DKXP8CSTX",
};

// Firebase 앱 초기화
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Firestore 인스턴스 가져오기
export const db = getFirestore(app);

// Analytics 초기화 (클라이언트에서만)
export const initializeAnalytics = async () => {
  if (typeof window !== "undefined") {
    try {
      const supported = await isSupported();
      if (supported) {
        getAnalytics(app);
      }
    } catch (error) {
      console.error("Analytics 초기화 오류: ", error);
    }
  }
};
