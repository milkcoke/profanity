import assert = require('assert');

import {Profanity} from '../../src';

describe('isProfane tests', () => {

  it('should return true if the word is profane', () => {
    const profanity = new Profanity('', {
      language: 'en-us',
    });

    assert(profanity.isProfane('shit'));
  });

  it('should return true if the korean word is profane', ()=>{
    const profanity = new Profanity('', {
      language: 'ko',
    });

    assert(profanity.isProfane('섹스'));
  });

  it('filters out special characters text', () => {
    const profanity = new Profanity('', {
      language: 'en-us',
    });

    assert(profanity.isProfane("You're an asshole^ you are"));
  });

  it('should return true if detect profrane words and numberswith', () => {
    const profanity = new Profanity('', {
      language: 'en-us',
    });

    assert(profanity.isProfane('That l3sbi4n did a very good H4ndjob.'));
  });
});

