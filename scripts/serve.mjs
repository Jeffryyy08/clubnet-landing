import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { networkInterfaces } from 'node:os';
const root = fileURLToPath(new URL('../dist/', import.meta.url));
await stat(resolve(root, 'index.html'));
const lan = process.argv.includes('--lan');
const port = Number(process.env.PORT || 4180);
const types = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.jpg':'image/jpeg','.png':'image/png','.woff2':'font/woff2','.txt':'text/plain; charset=utf-8'};
createServer(async (req, res) => {
  res.setHeader('X-Content-Type-Options','nosniff');
  res.setHeader('Referrer-Policy','no-referrer');
  res.setHeader('Cache-Control','no-cache');
  if (!['GET','HEAD'].includes(req.method)) { res.writeHead(405); res.end(); return; }
  try {
    const pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
    const target=resolve(root, `.${pathname==='/'?'/index.html':pathname}`);
    if(!target.startsWith(root.endsWith(sep)?root:root+sep)) {res.writeHead(403);res.end();return;}
    const bytes=await readFile(target);res.writeHead(200,{'Content-Type':types[extname(target)]||'application/octet-stream'});res.end(req.method==='HEAD'?undefined:bytes);
  } catch {res.writeHead(404);res.end('Página no encontrada');}
}).on('error',error=>{console.error(error.message);process.exit(1);}).listen(port,lan?'0.0.0.0':'127.0.0.1',()=>{
  console.log(`ClubNet: http://127.0.0.1:${port}`);
  if(lan) for(const addresses of Object.values(networkInterfaces())) for(const address of addresses||[]) if(address.family==='IPv4'&&!address.internal) console.log(`Celular: http://${address.address}:${port}`);
});
