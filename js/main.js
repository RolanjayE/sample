
// const reveal = document.querySelector(".reveal");
// const message = document.querySelector(".message");

// function ShowHide() {
//     if(message.classList.contains("show")) {
//         message.classList.remove("show");
//     }else {
//         message.classList.add("show");
//     }
// }

// reveal.addEventListener("click", ShowHide)



const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const button = document.querySelector("button");

// one.addEventListener("click", function() {
//     console.log("div 1");
// }, true);

// two.addEventListener("click", function() {
//     console.log("div 2");
// }, true);

// three.addEventListener("click", function() {
//     console.log("div 3");
// }, true);

// button.addEventListener("click", function(e) {
//     e.preventDefault();
//     console.log(e.target.innerText = 'clicked!');
// }, true);


// one.addEventListener("click", function() {
//     console.log("div 1");
// }, false);

// two.addEventListener("click", function() {
//     console.log("div 2");
// }, false);

// three.addEventListener("click", function() {
//     console.log("div 3");
// }, false);

// button.addEventListener("click", function(e) {
//     e.preventDefault();
//     console.log(e.target.innerText = 'clicked!');
// }, false);




//------------------ Event Aligation


// document.querySelector("ul").addEventListener("click", function(e){
//     // let target = e.target;
//     console.log(e.target.getAttribute('id'));
//     if(e.target.matches('li')){
//         e.target.style.color = 'red';
//     }
// });

// const ul = document.querySelector("ul");
// const li = document.createElement("li");
// li.innerHTML = "gwapo";
// li.setAttribute("id", "gwapo");
// ul.appendChild(li);



let person = document.querySelector(".person");
let qoute = document.querySelector(".qoute");
let btnQoute = document.querySelector("#new-qoute");

const personQoutes = [
    {qoute: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
    person: "-Mother Teresa"
    },

    {qoute: "When you reach the end of your rope, tie a knot in it and hang on.",
    person: "-Franklin D. Roosevelt"
    },

    {qoute: "Always remember that you are absolutely unique. Just like everyone else.",
    person: "-Margaret Mead"
    },

    {qoute: "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.",
    person: "-Helen Kellera"
    },

    {qoute: "Whoever is happy will make others happy too.",
    person: "-Anne Frank"
    },
]





let data = Math.floor(Math.random() * personQoutes.length);
console.log(data);

btnQoute.addEventListener("click", function(){
    let number = Math.floor(Math.random() * personQoutes.length);
    person.innerHTML = personQoutes[number]["person"];
    qoute.innerHTML = personQoutes[number]["qoute"];
});















