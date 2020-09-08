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
  while (count < facts.length) {
    facts[count] = `${facts[count]}!!!`;
    console.log(facts[count])
    count ++;
  }
  return facts;
}

function theBeatlesPlay(num) {
  var numArray = [];
  do {
    numArray.push("I love the Beatles!");
  } while (num < 15)
  return numArray
}