const filter = (list, applyFunction) =>{ //List will be filtered according to applyFunction
	var functionAppliedList = [];
	for ( let i = 0; i < list.length; i++){
		var filterStatus = applyFunction(list[i], i, list.values());
		if (filterStatus){
			functionAppliedList.push(list[i]);
		}
	}
	return functionAppliedList;
}
module.exports = filter;