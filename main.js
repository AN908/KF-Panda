// KF Panda Search

//HTML Variables
let charNameEl = document.getElementById("char-name");
let charQuoteEl = document.getElementById("char-quote");
let charImageEl = document.getElementById("char-img");
//Button event listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let name = document.getElementById("char-ins").value;
  name = name.toLowerCase();

  //If statments - Test the input
  if (name === "po" || name === "dragon warrior" || name === "kung fu panda") {
    charNameEl.innerHTML = "Po";
    charQuoteEl.innerHTML = "Buddy, I am the Dragon Warrior";
    charImageEl.src = "img/po.png";
  } else if (name === "tigress") {
    charNameEl.innerHTML = "Tigress";
    charQuoteEl.innerHTML = "That was hardcore!";
    charImageEl.src = "img/tigress.png";
  } else if (name === "mantis") {
    charNameEl.innerHTML = "Mantis";
    charQuoteEl.innerHTML = "Fear the Bug!";
    charImageEl.src = "img/mantis.png";
  } else if (name === "monkey") {
    charNameEl.innerHTML = "Monkey";
    charQuoteEl.innerHTML = "We should hang out.";
    charImageEl.src = "img/monkey.png";
  } else if (name === "viper") {
    charNameEl.innerHTML = "Viper";
    charQuoteEl.innerHTML = "The poor guy is just gonna get himself killed!";
    charImageEl.src = "img/viper.png";
  } else if (name === "crane") {
    charNameEl.innerHTML = "Crane";
    charQuoteEl.innerHTML =
      "No no no, I meant you don't belong here—I mean, in this room. This is my room. Property of Crane";
    charImageEl.src = "img/crane.png";
  } else if (name === "boss wolf" || name === "bosswolf") {
    charNameEl.innerHTML = "Boss Wolf";
    charQuoteEl.innerHTML = "The panda? That's impossible!";
    charImageEl.src = "img/boss-wolf.png";
  } else if (name === "croc") {
    charNameEl.innerHTML = "Croc";
    charQuoteEl.innerHTML = "Vengeance is served!";
    charImageEl.src = "img/croc.png";
  } else {
    charNameEl.innerHTML = "?????";
    charQuoteEl.innerHTML = "----------";
    charImageEl.src = "img/question-mark.png";
  }
}

//Theme searcher
document.getElementById("theme-btn").addEventListener("click", colorTheme);

function colorTheme() {
  let background = document.getElementById("BODY");
  let input = document.getElementById("theme-in").value;
  input = input.toLowerCase();
  red = Math.random() * 255;
  green = Math.random() * 255;
  blue = Math.random() * 255;
  red = Math.round(red);
  green = Math.round(green);
  blue = Math.round(blue);
  //Else if statements
  if (input === "dark" || input === "black") {
    background.style.backgroundColor = `rgba(0, 0, 0, 0.7)`;
  } else if (input === "white" || input === "light") {
    background.style.backgroundColor = `rgba(255,255,255, 0.7)`;
  } else if (input === "random") {
    background.style.backgroundColor = `rgba(${red} , ${green} ,${blue}, 0.9)`;
  }
}
