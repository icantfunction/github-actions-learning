const test = require('node:test');
const assert = require('node:assert/strict');
const { greeting } = require('../src/greeting');

test('greeting formats a name', () => {
  assert.equal(greeting('GitHub Actions'), 'Hello, GitHub Actions!');
});
