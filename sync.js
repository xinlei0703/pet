/* 本地服务器数据同步 */
let currentUser = { name: 'Jarvis', className: '1', userId: '1_Jarvis' };

const API_BASE = window.location.origin + '/api/data/';

async function loadUserData() {
  try {
    const resp = await fetch(API_BASE + encodeURIComponent(currentUser.userId));
    const result = await resp.json();
    if (result.success && result.data) {
      const data = result.data;
      Object.keys(progress).forEach(k => delete progress[k]);
      Object.keys(dailyStats).forEach(k => delete dailyStats[k]);
      Object.keys(stageProgress).forEach(k => delete stageProgress[k]);
      if (data.pet_progress) Object.assign(progress, data.pet_progress);
      if (data.pet_daily_stats) Object.assign(dailyStats, data.pet_daily_stats);
      if (data.pet_streak) Object.assign(streak, data.pet_streak);
      if (data.pet_stage_progress) Object.assign(stageProgress, data.pet_stage_progress);
      if (data.pet_settings) Object.assign(settings, data.pet_settings);
      LS.set('pet_settings', settings);
      LS.set('pet_progress', progress);
      LS.set('pet_daily_stats', dailyStats);
      LS.set('pet_streak', streak);
      LS.set('pet_stage_progress', stageProgress);
    } else {
      await syncToCloud();
    }
  } catch (e) {
    console.warn('数据加载失败，使用本地数据:', e);
  }
}

async function syncToCloud() {
  if (!currentUser) return;
  try {
    await fetch(API_BASE + encodeURIComponent(currentUser.userId), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: currentUser.name,
        className: currentUser.className,
        lastSync: new Date().toISOString(),
        pet_settings: JSON.parse(JSON.stringify(settings)),
        pet_progress: JSON.parse(JSON.stringify(progress)),
        pet_daily_stats: JSON.parse(JSON.stringify(dailyStats)),
        pet_streak: JSON.parse(JSON.stringify(streak)),
        pet_stage_progress: JSON.parse(JSON.stringify(stageProgress))
      })
    });
  } catch (e) {
    console.warn('同步失败:', e);
  }
}

// 兼容旧代码
const syncToFirestore = syncToCloud;
function getLoggedInUser() { return currentUser; }
async function loginUser() { await loadUserData(); return currentUser; }
async function logoutUser() {}

// 页面关闭/刷新前同步数据
window.addEventListener('beforeunload', () => {
  if (!currentUser) return;
  const data = JSON.stringify({
    name: currentUser.name,
    className: currentUser.className,
    lastSync: new Date().toISOString(),
    pet_settings: settings,
    pet_progress: progress,
    pet_daily_stats: dailyStats,
    pet_streak: streak,
    pet_stage_progress: stageProgress
  });
  navigator.sendBeacon(
    API_BASE + encodeURIComponent(currentUser.userId),
    new Blob([data], { type: 'application/json' })
  );
});