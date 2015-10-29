	
var lexicon = [];

var SpanishBtn = $("#spanish-btn");
var intalianBtn$("#italian-btn");
var bengaliBtn$("#bengali-btn")

function ConverterButtons(thing){
	var newinput = [];
	newinput = input.split(" ");
	return newinput;
};

SpanishBtn.click(function(){
	console.log(SpanishBtn);
	var input = $("#input-text").val();
	var translateMe;
	var output;

	translateMe = ConverterButtons(input);
	output = WordGroup.translateToSpanish(translateMe);
});

// newinput = input.split(input)
// console.log(newinput)
	
	












// for (var i = 0;i < input.length; i++) {
// 				lexicon = new lexicon[input[i]]
// 				console.log(lexicon);
// 			};
//hello como estas