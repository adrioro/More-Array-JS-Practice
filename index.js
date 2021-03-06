var mynums = ['zero', 'one', 'two', 'three'];
//ARRAY METHODS - Array.prototype//

mynums[0] = "nine"; //Changes this items at index zero.

mynums.push("twenty"); //Adds this item.

mynums.push("zero", "thirteen"); //Adds these items.

mynums.shift(); // Removes the first item and returns it.

mynums.pop(); //Removes the last item and returns it.

mynums.sort(); //if not specified it sorts it alphabetically.

mynums.splice(0, 3); //it removes the items from the first index(0), to the second inde(3);

mynums["colour"] = "blue"; //adds named index to the end of array, colour:blue.

Object.getOwnPropertyNames(mynums);
/* So, for this array:
["two", "zero", colour: "blue"]
it will return the following properties:
["two", "zero", colour: "blue"]*/

//Looping Arrays//

//for each//
var names = ["Alex", "Ron", "Kent"];

for (x in names) {
  console.log(x); //prints the indexes.
}

for (x in names) {
  console.log(names[x]); //prints the names of the elements.
}

//for loop (more accurate)//

var someNames = ["Mary", "Rosa", "Elizabeth", "Yoli"];

for (x = 0; x <= 3; x++) {
  console.log(x); //prints the indexes.
  console.log(someNames[x]);
}
/* 0
Mary
1
Rosa
2
Elizabeth
3
Yoli
*/

for (x = 0; x <= 3; x++) {
  console.log(x + " " + someNames[x]);
}
/*
0 Mary
1 Rosa
2 Elizabeth
3 Yoli
 */

for (x = 0; x <= someNames.length - 1; x++) {
  console.log(someNames[x] + " is the name.");
}