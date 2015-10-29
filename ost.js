var WordGroup = {};
var WordGroup = (function(wg) {
  // var lexBengali = ["janmadina", "Śubha"];
  // var lexEnglish = ["birthday", "happy"];
  var lexBengali = {"birthday":"janmadina", "happy":"Śubha", "new":"naba", "year":"barṣa", "newyear":"nababarṣa"};

  wg.translateToBengali = function(inputArray) {
    var outputArray = [];
    var i =0;
    var current;

    for (i = 0; i < inputArray.length; i++) {
      current = inputArray[i];
      outputArray[i] = lexBengali[current];
    };

    // for (i = 0; i < inputArray.length; i++) {
    //   for (var j = 0; j < lexBengali.length; j++) {
    //     if (inputArray[i] === lexEnglish[j]) {
    //       outputArray[i] = lexBengali[j];
    //     }
    //   }
    // }

    return outputArray;
  };

  return wg;

})(WordGroup);

console.log(WordGroup.translateToBengali(["happy","new", "year"]));

