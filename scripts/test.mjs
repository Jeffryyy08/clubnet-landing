import { chromium } from 'playwright';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
const base=process.env.TEST_URL||'http://127.0.0.1:4180';
const browser=await chromium.launch({executablePath:'C:/Program Files/Google/Chrome/Application/chrome.exe',headless:true});
await mkdir('.impeccable/review',{recursive:true});
const report=[];
try {
for(const width of [1440,390,320,768,1024]) {
 const page=await browser.newPage({viewport:{width,height:width===1440?960:844},reducedMotion:'reduce'});
 const errors=[],external=[];
 page.on('pageerror',e=>errors.push(e.message));
 page.on('request',r=>{if(!r.url().startsWith(base))external.push(r.url());});
 await page.goto(base);await page.evaluate(()=>document.fonts.ready);
 assert.equal(await page.locator('h1').innerText(),'Encendé\ntus ganas\nde aprender.');
 assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`Overflow at ${width}`);
 assert(await page.locator('.hero-mark').evaluate(img=>img.complete&&img.naturalWidth>0));
 await page.locator('.canva').click();assert(await page.locator('#canva').evaluate(el=>el.open));
 await page.locator('#canva summary').click();assert(!(await page.locator('#canva').evaluate(el=>el.open)));
 await page.locator('.faq summary').first().click();assert(await page.locator('.faq details').first().evaluate(el=>el.open));
 assert.equal(await page.locator('a[href^="tel:"]').getAttribute('href'),'tel:+50689086996');
 assert.equal(await page.locator('.gallery-slide').count(),6);assert.equal(await page.locator('.gallery-slide img').evaluateAll(images=>images.every(img=>img.complete&&img.naturalWidth>0)),true);await page.locator('.gallery-next').click();assert(await page.locator('.gallery-slide').nth(1).evaluate(el=>el.classList.contains('is-active')));
 const broken=await page.locator('a[href^="#"]').evaluateAll(links=>links.filter(a=>!document.getElementById(a.hash.slice(1))).map(a=>a.hash));assert.deepEqual(broken,[]);
 assert.deepEqual(errors,[]);assert.deepEqual(external,[]);
 await page.goto(base);await page.evaluate(()=>document.fonts.ready);await page.evaluate(()=>scrollTo(0,0));
 if(width===1440||width===390){await page.screenshot({path:`.impeccable/review/${width===1440?'desktop':'mobile'}.png`,fullPage:true});await page.screenshot({path:`.impeccable/review/${width===1440?'desktop':'mobile'}-hero.png`});}
 report.push({width,overflow:false,course:true,faq:true,anchors:true,consoleErrors:errors,externalRequests:external});await page.close();
}
const nojs=await browser.newPage({javaScriptEnabled:false});await nojs.goto(base);assert(await nojs.locator('h1').isVisible());await nojs.locator('#excel summary').click();assert(await nojs.locator('#excel').evaluate(el=>el.open));await nojs.close();
const formPage=await browser.newPage();await formPage.goto(base);await formPage.evaluate(()=>{window.__whatsappUrl='';window.open=(url)=>{window.__whatsappUrl=url;};});await formPage.locator('#consulta-nombre').fill('Ana');await formPage.locator('#consulta-curso').selectOption({label:'Excel'});await formPage.locator('#consulta-mensaje').fill('¿Qué horarios tienen?');await formPage.locator('#whatsapp-form').evaluate(form=>form.requestSubmit());const whatsappUrl=await formPage.evaluate(()=>window.__whatsappUrl);assert(whatsappUrl.startsWith('https://wa.me/50689086996?text='));assert(decodeURIComponent(whatsappUrl).includes('Ana'));assert(decodeURIComponent(whatsappUrl).includes('Excel'));await formPage.close();
for(const width of [1440,390]) {
const keyboard=await browser.newPage({viewport:{width,height:960},reducedMotion:'reduce'});await keyboard.goto(base);await keyboard.keyboard.press('Tab');assert.equal(await keyboard.locator(':focus').innerText(),'Saltar al contenido');
for(const [selector,color,name] of [['.hero-action','rgb(27, 52, 87)','hero'],['.contact .button','rgb(255, 255, 255)','contact']]) {
 let found=false;for(let i=0;i<35;i++){await keyboard.keyboard.press('Tab');if(await keyboard.locator(selector).evaluate(el=>el===document.activeElement)){found=true;break;}}
 assert(found,`Keyboard must reach ${selector}`);assert.equal(await keyboard.locator(selector).evaluate(el=>getComputedStyle(el).outlineColor),color);
 await keyboard.screenshot({path:`.impeccable/review/focus-${name}-${width}.png`});
}
await keyboard.close();}
await writeFile('.impeccable/review/tests.json',JSON.stringify({viewports:report,noJavaScript:true,skipLink:true},null,2));console.log('PASS: 5 viewports, course toggles, FAQ, links, no external requests, no-JS and keyboard skip link.');
} finally {await browser.close();}
