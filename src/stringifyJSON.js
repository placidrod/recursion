// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  var result = '';

  var isEmptyObject = function(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    }
    return true;
  }

  var isStringifiableObj = function(obj) {
    var isStringifiable = false;
    for (var item in obj) {
      if (obj[item] !== undefined && typeof obj[item] !== 'function') {
        isStringifiable = true;
        break;
      }
    }
    return isStringifiable;
  };

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
  } else if (typeof obj === 'object') {
    if (isEmptyObject(obj) || !isStringifiableObj(obj)) {
      return '{}';
    } else {
      result += '{';
      for(var item in obj) {
        result += '"' + item + '":' + stringifyJSON(obj[item]) + ',';
      }
      result = result.slice(0, -1);
      result += '}';
      return result;
    }
  }
};
