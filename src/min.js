function findMin(list, minElement) {
	if (list.length == 0){
		return minElement;
	}
	else {
		if (list[0] < minElement){
			minElement = list[0];
		}
		list.splice(0,1);
		return findMin(list, minElement);
	}
}
const min = (list) => {
	var minElement = list[0];
	list.splice(0,1);
	minValue = findMin(list, minElement);
	return minValue
}
module.exports = findMin;
module.exports = min;