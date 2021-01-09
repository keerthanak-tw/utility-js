const filter = require('./filter');

describe('filter', () => {

	it('Testing x=>true filter for an empty array', () => {
		expect(filter([], x=>true)).toEqual([]);
	});
	it('Testing x=>true filter for a  non-empty array', () => {
		expect(filter([1,2,3], x=>true)).toEqual([1,2,3]);
	});
	it('Testing x=>false filter for a non-empty array', () => {
		expect(filter([1,2,3], x=>false)).toEqual([]);
	});
	it('Testing x>1 filter for a non-empty array', () => {
		expect(filter([1,2,3], x=>x>1)).toEqual([2,3]);
	});
	it('Testing upperCase filter for a non-empty array', () => {
		const filterUpperCase = (value) => {
			return value === value.toUpperCase();
		}
		expect(filter(['a','B','c','D'], filterUpperCase)).toEqual(['B','D']);
	});
	
})