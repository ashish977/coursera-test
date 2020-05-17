var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for(var name in names){
(function(NAME){
  var test = names[name].charAt(0);

  if(test=='j' || test=='J'){
    window.byeSpeaker.speak();
  }
  else{
    window.helloSpeaker.speak();
  }

})(names[name]);
}