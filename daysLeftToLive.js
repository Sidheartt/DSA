//Days keft to left to Live

const ps = require("prompt-sync");
const prompt = ps();

const age = prompt("What is your current age?");

const days = 365;
const weeks = 52;
const months = 12;
const ageLeft = 100 - age;

console.log(`You have ${ageLeft*days} days, ${ageLeft*weeks} weeks & ${ageLeft*months} months left to live` );