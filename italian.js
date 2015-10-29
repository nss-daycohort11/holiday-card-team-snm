console.log("test test");

var WordGroup = (function(wordgroup) {
	var lexicon = {"merry":"god", "christmas":"jul", "and":"och", "happy":"gott", "new":"nytt", "year":"år"};
	

		wordgroup.transToItalian = function(inputText) {

			var output = "";		
			
			for (var i = 0; i < inputText.length; i++) {
				var currentWord = inputText[i];
				console.log("This is the thing",currentWord)
				var matchingWord = lexicon[currentWord];
				console.log("This is the other thing",matchingWord)
				output += matchingWord + " ";
				
			}

			return output;

		}

	return wordgroup;
	

}(WordGroup));

var testObject = {"merry":"god", "christmas":"jul", "and":"och", "happy":"gott", "new":"nytt", "year":"år"};

var testArray = ["merry", "christmas"];

console.log(WordGroup.transToItalian(testArray));