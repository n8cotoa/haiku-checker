import { Haiku } from './../src/haiku';

describe('Haiku', function(){
  let haiku;
  beforeEach(function(){
    haiku = new Haiku('I am first with five', 'Then seven in the middle', 'Five again to end')
  });

  it('will construct the haiku', function(){
    expect(haiku.line1).toEqual('I am first with five');
  });
});
