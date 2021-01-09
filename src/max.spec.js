const max = require('./max');

describe('max', () => {

     it('Max of [1,2,3,4] should be 4', () => {
          expect(max([1,2,3,4])).toEqual(4);
     });

})