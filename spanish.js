var WordGroup = (function(wg) {
  var lexiconSpanish = {"i":"te", "wish":"deseo", "you":"a ti", "merry":"feliz", "christmas":"navidad", "and":"y", "a":"un", "happy":"feliz", "new":"nuevo","year":"año", "enjoy":"disfruta"};

  wg.translateToSpanish = function(inputArray) { 
    var output = "";
    var i =0;
    var current;

    for (i = 0; i < inputArray.length; i++) {
      current = inputArray[i];
      output += lexiconSpanish[current] + " ";
    };

    return output;
    };

  wg.getLexiconSpanish = function(){
    return lexiconSpanish;
  }

  return wg;

})({});

