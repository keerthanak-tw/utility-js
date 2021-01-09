const map = require('./map');

describe('map', () => {

	it('Testing cube functionality for an empty array', () => {
		const cube = (value) => {
			return value * value * value;
		}
		expect(map([], cube)).toEqual([]);
	});
	it('Testing cube functionality for a non-empty array', () => {
		const cube = (value) => {
			return value * value * value;
		}
		expect(map([1,2,3], cube)).toEqual([1,8,27]);
	});
	it('Testing identity functionality for a non-empty array', () => {
		const identity = (value) => {
			return value;
		}
		expect(map([1,2,3], identity)).toEqual([1,2,3]);
	});
	it('Testing explicit increment for an object', () => {
		expect(map([{x : 10}], someObject=>someObject.x+1)).toEqual([11]);
	});

})