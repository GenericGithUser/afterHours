const facts = [
    "I Like Manuls",
    "Am trying to be a good Programmer",
    "Im very tall", 
    "I currently have a crappy phone", 
    "I wear glasses", 
    "Im an Ambivert",
    "Im currently in College",
    "Contrary to Popular Belief, I don't like eating",
    "I live in a tower",
    "I like taking Pictures",
    "I can be very angry sometimes",
    "I/We currently have 3 cats",
    "No Facts This Time",
    "No Facts This Time"
];

const random = Math.floor(Math.random() * 12);
const factoidBox = document.querySelector('.factoid');

factoidBox.textContent = facts[random];

const btnMe = document.querySelector('.btnMe');

btnMe.addEventListener("click", ()=>{
    window.location.assign("/pages/about/");
});

const block = document.querySelector('.black');

block.addEventListener("animationend", ()=>{
    block.classList.add("hidder");
});