const reduce = (list, reducer, initialValue) =>{ //List will be mapped to another list according to applyFunction
	let reducedValue;
	if (initialValue == undefined) {
		if (typeof(list[0]) == "string"){
			reducedValue = "";
		}
		else if (typeof(list[0]) == "number"){
			reducedValue = 0;
		}
		else { reducedValue = undefined }
	}
	else{ reducedValue = initialValue }

	for ( let i = 0; i < list.length; i++){
		reducedValue = reducer(reducedValue, list[i], i, list.values());
	}
	return reducedValue;
}
module.exports = reduce;