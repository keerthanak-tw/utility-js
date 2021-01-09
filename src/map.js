const map = (list, applyFunction) =>{ //List will be mapped to another list according to applyFunction
	var functionAppliedList = [];
	for ( let i = 0; i < list.length; i++){
		var functionAppliedElement = applyFunction(list[i], i, list.values());
		functionAppliedList.push(functionAppliedElement);
	}
	return functionAppliedList;
}
module.exports = map;