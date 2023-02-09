'use strict';

const fork = require('..');
const assert = require('assert').strict;

assert.strictEqual(fork(), 'Hello from fork');
console.info("fork tests passed");
