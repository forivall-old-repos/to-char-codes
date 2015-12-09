module.exports = function toCharCodes(s) {
  var l = s.length, a = new Array(l);
  for (var i = 0; i < l; i++) {
    a[i] = s.charCodeAt(i);
  }
  return a;
}
