// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var els = [];

  var addElementsWithClass = function(el) {
    if(el.classList !== undefined && el.classList.contains(className)) {
      els.push(el);
    }
    el.childNodes.forEach(function(el) {
      addElementsWithClass(el);
    });
  }

  addElementsWithClass(document.body);

  return els;
};
