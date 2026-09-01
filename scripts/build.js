const { mkdirSync, readFileSync, writeFileSync } = require('node:fs');

mkdirSync('dist', { recursive: true });
const source = readFileSync('src/greeting.js', 'utf8');
writeFileSync('dist/greeting.js', source);
console.log('Built dist/greeting.js');
