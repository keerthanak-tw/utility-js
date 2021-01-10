const tail = require('./tail');

const mapList = (list, applyFunction, functionAppliedList) =>{
	if (list.length > 0) {
		var functionAppliedElement = applyFunction(list[0]);
		functionAppliedList.push(functionAppliedElement);
		return mapList(tail(list), applyFunction, functionAppliedList);
	}
	return functionAppliedList
}

const map = (list, applyFunction) =>{ //List will be mapped to another list according to applyFunction
	var functionAppliedList = [];
	mappedList = mapList(list, applyFunction, functionAppliedList);
	return mappedList
}
module.exports = map;