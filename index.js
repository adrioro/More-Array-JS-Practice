var mynums = ['zero', 'one', 'two', 'three'];
mynums[0] = "nine"; //Adds this items at index zero.
mynums.push("twenty"); //Adds this item.
mynums.push("zero", "thirteen"); //Adds these items.
mynums.shift(); // Removes the first item and returns it.
mynums.pop(); //Removes the last item and returns it.

mynums.sort(); //if not specified it sorts it alphabetically.

mynums.splice(0, 3); //it removes the items from the first index(0), to the second inde(3);