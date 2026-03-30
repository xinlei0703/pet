/* Firebase 云端数据同步 */
const firebaseConfig = {
  apiKey: "AIzaSyDG8Pl_g1WIg91LOHxWPyb6QBoujVAZOmQ",
  authDomain: "pet-vocabulary.firebaseapp.com",
  projectId: "pet-vocabulary",
  storageBucket: "pet-vocabulary.firebasestorage.app",
  messagingSenderId: "980493703885",
  appId: "1:980493703885:web:c71afd937e9cff97396784"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
db.enablePersistence().catch(err => console.warn('离线持久化:', err.code));

let currentUser = null;

function getUserId(name, className) {
  return className + '_' + name;
}

function getLoggedInUser() {
  if (currentUser) return currentUser;
  try { return JSON.parse(localStorage.getItem('pet_user')) || null; } catch { return null; }
}

async function loginUser(name, className) {
  const userId = getUserId(name, className);
  currentUser = { name, className, userId };
  localStorage.setItem('pet_user', JSON.stringify(currentUser));

  const doc = await db.collection('users').doc(userId).get();
  if (doc.exists) {
    const data = doc.data();
    if (data.pet_progress) {
      // 清空再赋值，保证完整覆盖
      Object.keys(progress).forEach(k => delete progress[k]);
      Object.assign(progress, data.pet_progress);
    }
    if (data.pet_daily_stats) {
      Object.keys(dailyStats).forEach(k => delete dailyStats[k]);
      Object.assign(dailyStats, data.pet_daily_stats);
    }
    if (data.pet_streak) Object.assign(streak, data.pet_streak);
    if (data.pet_stage_progress) {
      Object.keys(stageProgress).forEach(k => delete stageProgress[k]);
      Object.assign(stageProgress, data.pet_stage_progress);
    }
    if (data.pet_settings) Object.assign(settings, data.pet_settings);
    // 同步到 localStorage
    LS.set('pet_settings', settings);
    LS.set('pet_progress', progress);
    LS.set('pet_daily_stats', dailyStats);
    LS.set('pet_streak', streak);
    LS.set('pet_stage_progress', stageProgress);
  } else {
    await syncToFirestore();
  }
  return currentUser;
}

async function syncToFirestore() {
  if (!currentUser) return;
  await db.collection('users').doc(currentUser.userId).set({
    name: currentUser.name,
    className: currentUser.className,
    lastSync: firebase.firestore.FieldValue.serverTimestamp(),
    pet_settings: JSON.parse(JSON.stringify(settings)),
    pet_progress: JSON.parse(JSON.stringify(progress)),
    pet_daily_stats: JSON.parse(JSON.stringify(dailyStats)),
    pet_streak: JSON.parse(JSON.stringify(streak)),
    pet_stage_progress: JSON.parse(JSON.stringify(stageProgress))
  }, { merge: true });
}

function logoutUser() {
  currentUser = null;
  localStorage.removeItem('pet_user');
}
