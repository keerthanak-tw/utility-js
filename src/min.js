const tail = require('./tail');

function findMin(list, minElement) {
	if (list.length == 0){
		return minElement;
	}
	else {
		if (list[0] < minElement){
			minElement = list[0];
		}
		return findMin(tail(list), minElement);
	}
}
const min = (list) => {
	var minElement = list[0];
	minValue = findMin(tail(list), minElement);
	return minValue
}
module.exports = findMin;
module.exports = min;