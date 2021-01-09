const reduce = require('./reduce');

describe('reduce', () => {

	it('Testing x+y reducer for an empty array', () => {
		expect(reduce([], (x,y)=>x+y)).toBeUndefined();
	});

	it('Testing x+y,10 reducer for an empty array', () => {
		expect(reduce([], (x,y)=>x+y,10)).toEqual(10);
	});

	it('Testing x+y reducer for a non-empty array', () => {
		expect(reduce(['a','b','c'], (x,y)=>x+y)).toMatch(/abc/);
	});

	it('Testing x+y,z filter for a non-empty array', () => {
		expect(reduce(['a','b','c'], (x,y)=>x+y,'z')).toMatch(/zabc/);
	});
	
})