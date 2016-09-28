function wordFrequency(string) {
    //create stats object
    var stats = {};

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

    // break string into array of words:
    words = string.split(' ');

    // create words array index:
    // indexing from the end of array bc idk ¯\_(ツ)_/¯
    var index = words.length - 1;

    // initialize stats object with first words array item:
    while (index >= 0) {
        var currentString = words[index]
        if (currentString.length > 1) { //itemize stats object
            stats[currentString] = 0;
        } //add keyname from array string
        index--;
    }

    index = words.length; //count words
    while (index >= 0) {
        for (var keyname in stats) {
            if (words[index] === keyname) { // word match
                stats[words[index]]++; //add keyname from array string
            }
        }
        index--;
    }

    var node;
    for (word in stats) { // put stats on screen
        // probably should've set functions for this up but ¯\_(ツ)_/¯
        var para = document.createElement('p');
        statsElement.appendChild(para);
        var span1 = document.createElement('span');
        para.appendChild(span1);
        span1.className = 'info';
        span1.innerHTML = word;
        var span2 = document.createElement('span');
        para.appendChild(span2);
        span2.className = 'info';
        span2.innerHTML = ' | ';
        var span3 = document.createElement('span');
        para.appendChild(span3);
        span3.className = 'info';
        span3.innerHTML = stats[word];
    }
    //more manual styling to adjust for stat content:
    document.getElementById('sonnet-stats').style.height = 'auto';
    document.getElementById('sonnet').style.height = document.getElementById('sonnet-stats').offsetHeight + 'px';
    return stats;
}



//HACKY GARBAGE DOWN HERE
// | | | |
// V V V V


// set up button to grab sonnet from document

var btn = document.getElementById('calculate');
var sonnet = document.getElementById('sonnet').innerHTML;
var statsElement = document.getElementById('sonnet-stats');
btn.addEventListener('click', function() {
    wordFrequency(sonnet);
});

// manually style stuff bc ugh css:

boxHeight = document.getElementById('sonnet').offsetHeight;
document.getElementById('sonnet-stats').style.height = boxHeight + 'px';
