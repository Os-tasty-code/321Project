/**
 * Class for each chore
 * Another, separate class for each home? will house multiple chores
 * 
 * remember to add "<script type="module" src="Chore.js"></script>" in the head of any applicable HTML file
 * AND remember to import Chore.js near beginning of other applicable .js files (like Home.js?)
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
        dueDate,
        id,
        details,
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
    timeBeforeDue() {
        let now = new Date();
        let due = new Date(this.dueDate);
        let countDown = due - now; //time left in milliseconds?
        let daysTillDue = Math.floor(countDown / (1000 * 3600 * 24));
        return daysTillDue;
    }
}

export default Chore;
