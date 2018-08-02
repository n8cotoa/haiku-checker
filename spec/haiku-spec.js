import { Haiku } from './../src/haiku';

describe('Haiku', function(){
  let haiku;
  beforeEach(function(){
    haiku = new Haiku('I am first with five', 'Then seven in the middle', 'Five again to end')
  });

  it('will return number of syllables', function(){
    haiku.getSyllables();
    expect(haiku.count).toEqual([5, 7, 5]);
  });

  it('will construct the haiku', function(){
    expect(haiku.line1).toEqual('I am first with five');
  });

  it('will count for fringe case "idea", "acme", "aria"', function(){
    let testHaiku = new Haiku('idea', 'acme', 'aria');
    let count = testHaiku.getSyllables();
    expect(testHaiku.count).toEqual([3, 2, 3]);
  });

  it('will count for fringe case "boise"', function(){
    let testHaiku = new Haiku('boise', 'acme', 'aria');
    let count = testHaiku.getSyllables();
    expect(testHaiku.count[0]).toEqual(2);
  });

  it('will return true if inputed poem is a haiku', function(){
    expect(haiku.isHaiku()).toEqual(true);
  });

  it('will return false if inputed poem is not a haiku', function(){
    let testHaiku = new Haiku('idea', 'acme', 'aria');
    expect(testHaiku.isHaiku()).toEqual(false);
  });

});
