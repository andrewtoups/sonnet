function wordFrequency (string) {
  //create stats object
  var stats = {};
  // console.log("raw string:");
  // console.log(string);

  //make lowercase
  string = string.toLowerCase();

  //separate punctuation
  string = string.replace(/\n/g, '');
  string = string.replace(/,/g, ' , ');
  string = string.replace(/:/g, ' : ');
  string = string.replace(/;/g, ' ; ');
  string = string.replace(/"/g, ' " ');
  string = string.replace(/'/g, " ' ");
  string = string.replace(/-/g, ' - ');
  string = string.replace(/\./g, ' . ');
  // console.log("after replacing stuff: ");
  // console.log(string);

  // break string into array of words:
  words = string.split(' ');
  console.log("after split: ");
  console.log(words);

  // create object for each array item and increment value each time:
  // create words array index:
  var index = words.length - 1;
  // initialize stats object with first words array item:
  // stats[words[index]] = 0;
  // console.log("intialized stats object:");
  // console.log(stats);
  while (index >= 0){
    var currentString = words[index]
    if (currentString.length > 1){       //itemize stats object
      stats[currentString] = 0;
    }//add keyname from array string
    index--;
  }

  console.log("itemized stats object:");
  console.log(stats);
  index = words.length; //count words
  while (index >= 0){
    for (var keyname in stats){
      if (words[index] === keyname) { // word match
        stats[words[index]]++;        //add keyname from array string
      }
    }
    index--;
  }
  console.log("counted stats object:");
  console.log(stats);
  var node;
  for (word in stats) {
    // currentStat = word + " | " + stats[word];
    node = document.createTextNode(word);
    span.appendChild(node);
    statsElement.appendChild(span);
    node = document.createTextNode(" | ");
    span.appendChild(node);
    statsElement.appendChild(span);
    node = document.createTextNode(stats[word]);
    span.appendChild(node);
    statsElement.appendChild(span);
  }










  // display(string, 'sonnet-stats');
}








function display(value, target) {
  document.getElementById(target).innerHTML = value;
}









// set up button to grab sonnet from document

var btn = document.getElementById('calculate');
var sonnet = document.getElementById('sonnet').innerHTML;
var statsElement = document.getElementById('sonnet-stats');
btn.addEventListener('click', function() {
  wordFrequency(sonnet);
});

var span = document.createElement("span");
var para = document.createElement("p");
// var node = document.createTextNode("This is new.");
// para.appendChild(node);
//
//
// statsElement.appendChild(para);

// manually style stuff bc I'm a jerk:

boxHeight = document.getElementById('sonnet').offsetHeight;
document.getElementById('sonnet-stats').style.height = boxHeight + 'px';
