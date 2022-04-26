/**
 * Test script for use of Chore, Home, and User classes
 * 
 */

import Chore from "./Chore.js";
import Home from "../my-app/src/Classes/Home.js";
import User from "./User.js";


const jamesroche = new User(
    "James",
    ["Home1", "Home2"],
    ["dishes", "Chore2"],
    "placeholderA",
    "placeHolderB",
    1,
    "James is learning! Hooray for James!"
);

const dishes = new Chore(
    "do the dishes",
    jamesroche,
    1,
    "incomplete",
    "placeholderA",
    "placeHolderB",
    "April 30, 2022 11:59:00 EST",
    55,
    "pots and pans don't go in the washer!",

);


console.log("The users: ", jamesroche);
console.log("Info: ", jamesroche.message);
console.log("Chores: ", dishes.details);
console.log("Days till due: ", dishes.timeBeforeDue());

