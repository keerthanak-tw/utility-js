const map = (list, applyFunction) =>{ //List will be mapped to another list according to applyFunction
	var functionAppliedList = [];
	if (list.length == 0) {
		return functionAppliedList;
	}
	else {
		for ( var i = 0; i < list.length; i++){
			var functionAppliedElement = applyFunction(list[i]);
			functionAppliedList.push(functionAppliedElement);
	}}
	return functionAppliedList;
}
module.exports = map;