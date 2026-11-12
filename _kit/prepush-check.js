// Usage (from the repo root, right before every push):  node _kit/prepush-check.js
// Runs navtest on every concept page changed since origin/main and exits 1 if any fails
// (blank routes, JS parse errors). Never push when it fails: a URL may already be in a CEO's inbox.
const { execSync } = require('child_process');
const path = require('path');
const root = execSync('git rev-parse --show-toplevel').toString().trim();
let base = 'origin/main';
try { execSync('git rev-parse --verify -q origin/main', { cwd: root }); } catch (e) { base = 'HEAD~1'; }
const files = execSync(`git diff --name-only ${base} HEAD -- "*/index.html"`, { cwd: root }).toString().split('\n').filter(f => f && !f.startsWith('_kit/'));
let fail = 0;
const fs = require('fs'), vm = require('vm');
// fast syntax check first: parse every inline <script> (a single typo blanks every route)
function syntaxErrors(file) {
  const html = fs.readFileSync(file, 'utf8'); const errs = [];
  const re = /<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/gi; let m, i = 0;
  while ((m = re.exec(html))) { i++; if (/type=["'](?!text\/javascript|module)/i.test(m[1])) continue;
    try { new vm.Script(m[2], { filename: `inline#${i}` }); } catch (e) { if (!/module|import|export/.test(e.message)) errs.push(`inline script #${i}: ${e.message}`); } }
  return errs;
}
for (const f of files) {
  const se = fs.existsSync(path.join(root, f)) ? syntaxErrors(path.join(root, f)) : [];
  if (se.length) { console.log('FAIL ' + f + ': JS syntax: ' + se[0]); fail = 1; continue; }
  let out = '';
  try { out = execSync(`node navtest.js "${path.join(root, f)}"`, { cwd: path.join(root, '_kit'), timeout: 300000 }).toString().trim().split('\n').pop(); }
  catch (e) { out = (e.stdout || '').toString().trim().split('\n').pop() || 'navtest crashed'; }
  if (/^OK/.test(out)) console.log('OK   ' + f); else { console.log('FAIL ' + f + ': ' + out); fail = 1; }
}
if (!files.length) console.log('no concept pages changed');
process.exit(fail);
