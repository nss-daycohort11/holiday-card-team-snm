	
var lexicon = [];
var SpanishBtn = $("#spanish-btn");
var intalianBtn = $("#italian-btn");
var bengaliBtn = $("#bengali-btn");

console.log("WordGroup", WordGroup);

function ConverterButtons(input) {
	var newinput = [];
	newinput = input.split(" ");
	console.log(newinput);
	return newinput;
};

SpanishBtn.click(function(){
	console.log(SpanishBtn);
	var input = $("#input-text").val();
	var translateMe;
	var output;

	translateMe = ConverterButtons(input);
	console.log("translateMe", translateMe);

	output = WordGroup.translateToSpanish(translateMe);
	console.log("this is output",output)
});



















// intalianBtn.click(function(){
// console.log(intalianBtn);


// newinput = input.split(input)
// console.log(newinput)
	
// });

// bengaliBtn.click(function(){
// console.log(bengaliBtn);


// newinput = input.split(input)
// console.log(newinput)
	
// });



	












// for (var i = 0;i < input.length; i++) {
// 				lexicon = new lexicon[input[i]]
// 				console.log(lexicon);
// 			};
//hello como estas