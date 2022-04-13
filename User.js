/**
 * Class for each User
 * 
 * remember to add "<script type="module" src="User.js"></script>" in the head of any applicable HTML file
 * AND remember to import User.js near beginning of other applicable .js files 
 *  
 */


class User {
    constructor(
        // Defines parameters:
        name,
        homeArray,
        choreArray,
        thingA,
        thingB,
        id,
        message,
    ) {
        // Define properties:
        this.name = name;
        this.homeArray = homeArray;
        this.choreArray = choreArray;
        this.placeHolder = {
            //another object within the chore
            propertyOne: thingA,
            propertyTwo: thingB,
        };
        this.id = id;
        this.message = message;
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

export default User;
