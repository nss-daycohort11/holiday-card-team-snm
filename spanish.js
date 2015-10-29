var WordGroup = (function(wg) {
  var lexSpanish = {"merry":"feliz", "christmas":"navidad", "and":"y", "a":"un", "happy":"feliz", "new":"nuevo","year":"año"};

  wg.translateToSpanish = function(inputArray) {
    var outputArray = [];
    var i =0;
    var current;

    for (i = 0; i < inputArray.length; i++) {
      current = inputArray[i];
      outputArray[i] = lexSpanish[current];
    };

    return outputArray;
  };

  return wg;

})({});

