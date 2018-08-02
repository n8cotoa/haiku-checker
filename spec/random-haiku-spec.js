import { RandomHaiku } from './../src/haiku';

describe('RandomHaiku', function(){
  it('will return a random word from our word list text file', function(){
    let word = new RandomHaiku();
    expect(word.setPhrase().not.toEqual("");
  });
});
