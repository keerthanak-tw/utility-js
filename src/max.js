const tail = require('./tail');

function findMax(list, maxElement) {
	if (list.length == 0){
		return maxElement;
	}
	else {
		if (list[0] > maxElement){
			maxElement = list[0];
		}
		return findMax(tail(list), maxElement);
	}
}
const max = (list) => {
	maxElement = list[0];
	maxValue = findMax(tail(list), maxElement);
	return maxValue
}
module.exports = findMax;
module.exports = max;