import assert = require('assert');

import {Profanity} from '../../src';

describe('addWords tests', () => {
  it('should return true for the new word added in list of profane words', () => {
    const profanity = new Profanity();
    profanity.addWords('bonita');
    assert(profanity.isProfane('bonita'));
  });

  it('should replace multiple instances of words added in list of profane words', () => {
    const profanity = new Profanity('you is so beautiful baby', {
      language: 'en-us',
    });

    profanity.censor();
    const actual = 'you is so beautiful baby';
    const spected = profanity.loadOriginal();

    assert.strictEqual(actual, spected);
  });
});
