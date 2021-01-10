const tail = require('./tail');

const filterList = (list, applyFilter, filterAppliedList) => {
	if (list.length > 0) {
		var filterStatus = applyFilter(list[0]);
		if (filterStatus){
			filterAppliedList.push(list[0]);
		}
		return filterList(tail(list), applyFilter, filterAppliedList);
	}
	return filterAppliedList
}

const filter = (list, applyFilter) => { //List will be filtered according to applyFilter
	var filterAppliedList = [];
	filterAppliedList = filterList(list, applyFilter, filterAppliedList)
	return filterAppliedList;
}
module.exports = filter;