const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const DATA_DIR = path.join(__dirname, 'data');

// 确保 data 目录存在
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR);

// MIME 类型映射
const MIME = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.mp3': 'audio/mpeg',
  '.wav': 'audio/wav'
};

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => resolve(body));
    req.on('error', reject);
  });
}

function sendJSON(res, code, data) {
  res.writeHead(code, {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  });
  res.end(JSON.stringify(data));
}

function serveStatic(res, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const mime = MIME[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end('Not Found');
      return;
    }
    res.writeHead(200, { 'Content-Type': mime + '; charset=utf-8' });
    res.end(data);
  });
}

const server = http.createServer(async (req, res) => {
  // CORS 预检
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    return res.end();
  }

  const url = new URL(req.url, `http://localhost:${PORT}`);

  // API: 读取用户数据
  if (req.method === 'GET' && url.pathname.startsWith('/api/data/')) {
    const userId = decodeURIComponent(url.pathname.slice('/api/data/'.length));
    const file = path.join(DATA_DIR, userId + '.json');
    if (fs.existsSync(file)) {
      try {
        const data = JSON.parse(fs.readFileSync(file, 'utf-8'));
        return sendJSON(res, 200, { success: true, data });
      } catch (e) {
        return sendJSON(res, 500, { success: false, error: '数据读取失败' });
      }
    }
    return sendJSON(res, 200, { success: true, data: null });
  }

  // API: 保存用户数据
  if (req.method === 'POST' && url.pathname.startsWith('/api/data/')) {
    const userId = decodeURIComponent(url.pathname.slice('/api/data/'.length));
    const file = path.join(DATA_DIR, userId + '.json');
    try {
      const body = await readBody(req);
      const data = JSON.parse(body);
      fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf-8');
      return sendJSON(res, 200, { success: true });
    } catch (e) {
      return sendJSON(res, 500, { success: false, error: '数据保存失败' });
    }
  }

  // 静态文件服务
  let filePath = path.join(__dirname, url.pathname === '/' ? 'index.html' : url.pathname);
  filePath = path.normalize(filePath);
  // 安全检查：防止路径遍历
  if (!filePath.startsWith(__dirname)) {
    res.writeHead(403);
    return res.end('Forbidden');
  }
  serveStatic(res, filePath);
});

server.listen(PORT, () => {
  console.log(`服务器已启动: http://localhost:${PORT}`);
  // 自动打开浏览器
  const { exec } = require('child_process');
  const cmd = process.platform === 'win32' ? 'start' :
              process.platform === 'darwin' ? 'open' : 'xdg-open';
  exec(`${cmd} http://localhost:${PORT}`);
});
