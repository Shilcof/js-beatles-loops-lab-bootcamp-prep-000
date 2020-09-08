// add solution here

var array = [];

function theBeatlesPlay(musicians, instruments) {
  for (let i = 0; i < musicians.length; i++ ) {
    array.push(`${musicians[i]} plays ${instruments[i]}`);
  }
  return array;
}

var count = 0;

function johnLennonFacts(facts) {
  var newFacts = [];
  while (count < facts.length) {
    newFacts[count] = `${facts[count]}!!!`;
    count ++;
  }
  return newFacts;
}

function iLoveTheBeatles(num) {
  var numArray = [];
  do {
    numArray.push("I love the Beatles!");
  } while (num < 15); num ++;
  return numArray;
}