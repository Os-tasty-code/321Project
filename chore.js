/**
 * Class for each chore
 * Another, separate class for each home? will house multiple chores
 * 
 * remember to add "<script type="module" src="Backpack.js"></script>" in the head of any applicable HTML file
 * AND remember to import chore.js near beginning of other applicable .js files (like home.js)
 *  
 */


class Chore {
    constructor(
        // Defines parameters:
        name,
        assignee,
        score,
        completionStatus,
        thingA,
        thingB,
        dueDate
    ) {
        // Define properties:
        this.name = name;
        this.assignee = assignee;
        this.score = score;
        this.completionStatus = completionStatus;
        this.placeHolder = {
            //another object within the chore
            propertyOne: thingA,
            propertyTwo: thingB,
        };
        this.dueDate = dueDate;
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

export default Chore;
