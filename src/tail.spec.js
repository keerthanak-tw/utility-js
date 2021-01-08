const tail = require('./tail');

describe('Tail', () => {

     it('Tail of [] should be []', () => {
          expect(tail([])).toEqual([]);
     });

     it('Tail of [1,2,3] is [2,3]', () => {
          expect(tail([1,2,3])).toEqual([2,3]);
     });

})