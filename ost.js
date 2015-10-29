var WordGroup = (function(wg) {
  // var lexBengali = ["janmadina", "Śubha"];
  // var lexEnglish = ["birthday", "happy"];
  var lexBengali = {"birthday":"janmadina", "happy":"Śubha", "new":"naba", "year":"barṣa", "newyear":"nababarṣa", 
          "merry":"Śubha", "christmas":"baṛadina", "and":"Ēbaṁ", "a":"", "easter":"Isṭāra", "love":"prēma", 
          "halloween":"Hyālō'ina", "goat":"chāgala", "i":"Āmi", "you":"Āpani"};

  wg.translateToBengali = function(inputArray) {
    var output = "";
    var i =0;
    var current;

    for (i = 0; i < inputArray.length; i++) {
      current = inputArray[i];
      output += lexBengali[current] + " ";
    };

    // for (i = 0; i < inputArray.length; i++) {
    //   for (var j = 0; j < lexBengali.length; j++) {
    //     if (inputArray[i] === lexEnglish[j]) {
    //       outputArray[i] = lexBengali[j];
    //     }
    //   }
    // }

    return output;
  };

  wg.getBengali = function() {
    return lexBengali;
  };

  return wg;

})(WordGroup);

