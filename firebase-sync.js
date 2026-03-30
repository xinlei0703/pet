/* Firebase 云端数据同步 */
let db = null;
let currentUser = null;
let firebaseReady = false;

// 初始化 Firebase（如果 SDK 加载成功）
try {
  if (typeof firebase !== 'undefined') {
    firebase.initializeApp({
      apiKey: "AIzaSyDG8Pl_g1WIg91LOHxWPyb6QBoujVAZOmQ",
      authDomain: "pet-vocabulary.firebaseapp.com",
      projectId: "pet-vocabulary",
      storageBucket: "pet-vocabulary.firebasestorage.app",
      messagingSenderId: "980493703885",
      appId: "1:980493703885:web:c71afd937e9cff97396784"
    });
    db = firebase.firestore();
    db.enablePersistence().catch(() => {});
    firebaseReady = true;
  }
} catch (e) {
  console.warn('Firebase 初始化失败:', e);
}

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

  if (!firebaseReady) return currentUser;

  const doc = await db.collection('users').doc(userId).get();
  if (doc.exists) {
    const data = doc.data();
    if (data.pet_progress) {
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
  if (!firebaseReady || !currentUser) return;
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
