function findMax(list, maxElement) {
	if (list.length == 0){
		return maxElement;
	}
	else {
		if (list[0] > maxElement){
			maxElement = list[0];
		}
		list.splice(0,1);
		return findMax(list, maxElement);
	}
}
const max = (list) => {
	maxElement = list[0];
	list.splice(0,1);
	maxValue = findMax(list, maxElement);
	return maxValue
}
module.exports = findMax;
module.exports = max;