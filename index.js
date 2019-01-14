var mynums = ['zero', 'one', 'two', 'three'];

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