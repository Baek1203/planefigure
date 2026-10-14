// 빈틈없이 퍼즐 · Firebase 연결 설정
// Firebase 콘솔 > 프로젝트 설정(톱니바퀴) > 일반 > 내 앱 > 웹 앱의 'SDK 설정 및 구성'에서
// firebaseConfig 값을 복사해 아래 따옴표 안을 바꿔 주세요. 이 파일만 고치면 학생 앱·대시보드가 함께 연결돼요.
// (이 값은 비밀번호가 아니라 '주소'에 가까워요. 실제 보호는 firestore.rules가 맡아요.)
window.BT_FIREBASE = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.firebasestorage.app",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};
