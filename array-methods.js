var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

//use forEach to loop through the planets and spit them into the DOM
planets.forEach(function(planet) { 
	//console.log("planet", planet);
	var el = document.getElementById("planets");
	el.innerHTML += `<p>${planet}</p>`; 
});

// Use the map method to create a new array where the first letter of each planet is capitalized
var capPlanets = planets.map(function(planet) {
	return planet.charAt(0).toUpperCase() + planet.slice(1);
});
console.log("capPlanets", capPlanets);

// Use the filter method to create a new array that contains planets with the letter 'e'
var ePlanets = planets.filter(function(planet){
	return planet.indexOf('e') > -1; 								//I forgot to type "return" here at first--how stupid!!
});
console.log("ePlanets", ePlanets);

// Use the reduce method to create a sentence from the words in the following array
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", 
"second", "mouse", "gets", "the", "cheese"];

var newWords = words.reduce(function(previous, current){return previous + " " + current}); 
var newSentence = newWords += "!!";
console.log("newSentence: ", newSentence);