const tail = require('./tail');

const reduceList = (list, reducer, reducedValue) => {
	if (list.length > 0) {
		reducedValue = reducer(reducedValue, list[0]);
		return reduceList(tail(list), reducer, reducedValue);
	}
	return reducedValue
}



const reduce = (list, reducer, initialValue) => { //List will be reduced according to the reducer
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

	reducedValue = reduceList(list, reducer, initialValue);
	return reducedValue;
}
module.exports = reduce;