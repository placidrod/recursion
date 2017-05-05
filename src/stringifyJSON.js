// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = '';

  if (typeof obj === 'number' || obj === null || typeof obj === 'boolean') {
  	return result += obj;
  } else if (typeof obj === 'string') {
  	return result += '"' + obj + '"';
  } else if (Array.isArray(obj)) {
  	if(obj.length === 0) {
  		return result += '[]';
  	} else {
  		result += '[';
  		obj.forEach(function(item, index) {
  			result += stringifyJSON(item) + ',';
  		});
  		result = result.slice(0, -1);
  		result += ']';
  		return result;
  	}
  }
};
