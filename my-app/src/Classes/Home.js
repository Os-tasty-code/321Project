class Home {
    static id = 0;
    constructor(
        // Defines parameters:
        name,
        users,
        choreArray,
        thingA,
        thingB,
        details,
    ) {
        // Define properties:
        this.name = name;
        this.users = users;
        this.choreArray = choreArray;
        this.placeHolder = {
            //another object within the chore
            propertyOne: thingA,
            propertyTwo: thingB,
        };
        this.details = details;
        this.id++;
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
