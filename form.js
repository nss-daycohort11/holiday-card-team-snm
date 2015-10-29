$(document).ready(function() {
	var SpanishBtn = $("#spanish-btn");
	var intalianBtn = $("#italian-btn");
	var bengaliBtn = $("#bengali-btn");
	var talking = $("#talk");
	var finalOutput;


	console.log("WordGroup", WordGroup);

	function ConverterButtons(input) {
		var newinput = [];
		newinput = input.split(" ");
		console.log(newinput);
		return newinput;
	};

	function displayOutput(putput) {
		$("#putItHere").html(putput);
		finalOutput = putput;
	}

	//BUTTON TO TRASLATE TO SPANISH
	SpanishBtn.click(function(){
		console.log(SpanishBtn);
		var input = $("#input-text").val();
		var translateMe;
		var output;

		translateMe = ConverterButtons(input);
		console.log("translateMe", translateMe);

		output = WordGroup.translateToSpanish(translateMe);
		console.log("this is output",output)
		displayOutput(output);
	});

	//BUTTON TO TRANSLATE TO INTALIANO
	intalianBtn.click(function(){
		console.log(intalianBtn);
		var input = $("#input-text").val();
		var translateMe;
		var output;

		translateMe = ConverterButtons(input);
		console.log("translateMe", translateMe);

		output = WordGroup.transToItalian(translateMe);
		console.log("this is output",output)
		displayOutput(output);
	});

	//BUTTON TO TRANSLATE TO BENGALI
	bengaliBtn.click(function(){
		console.log(bengaliBtn);
		var input = $("#input-text").val();
		var translateMe;
		var output;

		translateMe = ConverterButtons(input);
		console.log("translateMe", translateMe);

		output = WordGroup.translateToBengali(translateMe);
		console.log("this is output",output)
		displayOutput(output);
	});

	//BUTTON FOR TALKING PERSON!!!
	talking.click(function() {
		responsiveVoice.speak(finalOutput);
	});


});