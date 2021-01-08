const tail = (list) => {
      var result = [];
      for(var i=1; i<list.length; ++i){
	    result.push(list[i]);
      }
      return result;
}
module.exports = tail;