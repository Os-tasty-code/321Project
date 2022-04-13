/**
 * Class for each Home
 * 
 * remember to add "<script type="module" src="Home.js"></script>" in the head of any applicable HTML file
 * AND remember to import Home.js near beginning of other applicable .js files (like for use in arrays in User?)
 *  
 */


class Home {
    constructor(
        // Defines parameters:
        name,
        userArray,
        choreArray,
        thingA,
        thingB,
        id,
        details,
    ) {
        // Define properties:
        this.name = name;
        this.userArray = userArray;
        this.choreArray = choreArray;
        this.placeHolder = {
            //another object within the chore
            propertyOne: thingA,
            propertyTwo: thingB,
        };
        this.id = id;
        this.details = details;
    }
    // Add methods like normal functions:
    toggleComplete(completionStatus) {
        this.completionStatus = completionStatus;
    }
    newPlaceHolder(newA, newB) {
        this.placeHolder.propertyOne = newA;
        this.placeHolder.propertyTwo = newB;
    }
}

export default Home;
