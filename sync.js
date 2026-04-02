/* 本地服务器数据同步 */
let currentUser = null;
let cloudSynced = false;

const API_BASE = window.location.origin + '/api/data/';

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

  try {
    const resp = await fetch(API_BASE + encodeURIComponent(userId));
    const result = await resp.json();
    if (result.success && result.data) {
      const data = result.data;
      // 本地有数据且更新 → 保留本地；否则用服务器数据
      const localProgress = LS.get('pet_progress', {});
      const localTime = localStorage.getItem('pet_last_sync') || '';
      const serverTime = data.lastSync || '';
      const localHasData = Object.keys(localProgress).length > 0;

      if (localHasData && localTime && localTime > serverTime) {
        cloudSynced = true;
        await syncToCloud();
      } else {
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
        localStorage.setItem('pet_last_sync', serverTime);
        cloudSynced = true;
      }
    } else {
      cloudSynced = true;
      await syncToCloud();
    }
  } catch (e) {
    console.warn('数据加载失败，使用本地数据:', e);
    cloudSynced = true;
  }
  return currentUser;
}

async function syncToCloud() {
  if (!currentUser) return;
  if (!cloudSynced) return;
  const now = new Date().toISOString();
  try {
    await fetch(API_BASE + encodeURIComponent(currentUser.userId), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: currentUser.name,
        className: currentUser.className,
        lastSync: now,
        pet_settings: JSON.parse(JSON.stringify(settings)),
        pet_progress: JSON.parse(JSON.stringify(progress)),
        pet_daily_stats: JSON.parse(JSON.stringify(dailyStats)),
        pet_streak: JSON.parse(JSON.stringify(streak)),
        pet_stage_progress: JSON.parse(JSON.stringify(stageProgress))
      })
    });
    localStorage.setItem('pet_last_sync', now);
  } catch (e) {
    console.warn('同步失败:', e);
  }
}

async function logoutUser() {
  // 退出前先同步，必须等待完成
  try { await syncToCloud(); } catch (e) {}
  currentUser = null;
  cloudSynced = false;
  localStorage.removeItem('pet_user');
  localStorage.removeItem('pet_progress');
  localStorage.removeItem('pet_daily_stats');
  localStorage.removeItem('pet_streak');
  localStorage.removeItem('pet_stage_progress');
  localStorage.removeItem('pet_settings');
  localStorage.removeItem('pet_last_sync');
  Object.keys(progress).forEach(k => delete progress[k]);
  Object.keys(dailyStats).forEach(k => delete dailyStats[k]);
  Object.keys(stageProgress).forEach(k => delete stageProgress[k]);
  Object.assign(streak, { last: '', count: 0 });
  Object.assign(settings, { dailyNew: 20, theme: 'light' });
}

// 兼容旧代码中的 syncToFirestore 调用
const syncToFirestore = syncToCloud;
