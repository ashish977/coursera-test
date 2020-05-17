(function(window){
	var byeSpeaker={};
	var speakWord = "Good Bye";
	byeSpeaker.speak = function(){
		console.log(speakWord +" " + names[name]);
	}
	window.byeSpeaker = byeSpeaker;
})(window);