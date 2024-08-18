String.prototype.toSentenceCase = function () {
  var rg = /(^\w{1}|\.\s*\w{1})/gi;
  
  // Use replace with a callback function to capitalize the matched characters
  return this.replace(rg, function (toReplace) {
    return toReplace.toUpperCase();
  });
};
