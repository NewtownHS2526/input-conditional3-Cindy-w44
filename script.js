// ============================================
// ACTIVITY 3: THE SOLAR SYSTEM QUIZ
// ============================================
// In this activity, you will create a quiz where users guess the 8 planets.
// Follow the TODO comments to complete each section.
// Hint: Remember "My Very Eager Mother Just Served Us Nachos"
// (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune)
// ============================================

// --------------------------------------------
// STEP 1: SELECT DOM ELEMENTS
// --------------------------------------------
// We use document.querySelector() to "grab" HTML elements so we can 
// interact with them in JavaScript.
// 
// querySelector() takes a CSS selector as an argument:
//   - "#id-name" selects an element by its ID
//   - ".class-name" selects an element by its class
//
// TODO: Select the following three elements from the HTML:
//   1. The text input box (id="user-input")
//   2. The output div where correct answers appear (id="quiz-outputs")
//   3. The status message area (id="status")
// --------------------------------------------

const textBox = document.querySelector("#user-input");
const outputBox = document.querySelector("#quiz-outputs");
const statusBox = document.querySelector("#status");

// This console.log helps us verify our selections worked correctly.
// Open the browser's Developer Tools (F12) to see the output.
console.log(textBox, outputBox, statusBox);

// --------------------------------------------
// STEP 2: CREATE VARIABLES TO TRACK GAME STATE
// --------------------------------------------
// We need variables to keep track of:
//   - The player's score (how many correct answers)
//   - Whether they found the secret bonus answer
//
// TODO: Create two variables:
//   1. A "score" variable initialized to 0
//   2. A "bonus" variable (boolean) initialized to false
// --------------------------------------------

let score = 0;
let pluto = false;

// --------------------------------------------
// STEP 3: CREATE THE ANSWER-CHECKING FUNCTION
// --------------------------------------------
// This function runs every time the user submits an answer.
// It checks the user's input against our list of correct answers.
//
// Key concepts used here:
//   - textBox.value: Gets the text the user typed
//   - innerHTML: Allows us to add HTML content to an element
//   - += operator: Adds to existing content (doesn't replace it)
//   - if/else if/else: Checks multiple conditions in order
// --------------------------------------------

const checkAnswer = () => {
  // Get the current value from the text input
  const currentAnswer = textBox.value;
  console.log("Checking", currentAnswer);
  // TODO: Create if/else if/else statements to check for each planet.
  // For each correct answer:
  //   1. Add an <h3> with the planet name and a <p> with a fun fact
  //   2. Increase the score by 1
  // For incorrect answers:
  //   - Display an error message in the statusBox

  if (currentAnswer === "Mercury") {
    outputBox.innerHTML += `<p>Mercury is the smallest, fastest, and closest planet to the Sun in our solar system, with a heavily cratered, moon-like surface.</p>`;
    score += 1;
  } else if (currentAnswer === "Venus") {
    outputBox.innerHTML += `<p>Venus is Earth's "evil twin"—a world that is roughly the same size as our own but with a hellish environment where lead would melt like ice.</p>`;
    score += 1;
  } else if (currentAnswer === "Earth") {
    outputBox.innerHTML += `<p>Earth is far from just a "big rock"—it is a dynamic, shifting, and surprisingly fast-moving planet.</p>`;
    score += 1;
  } else if (currentAnswer === "Mars") {
    outputBox.innerHTML += `<p>Mars is the ultimate adventure destination—a cold, desert world where the scenery is larger than life and the sunsets are truly out of this world.</p>`;
    score += 1;
  } else if (currentAnswer === "Jupiter") {
    outputBox.innerHTML += `<p>Jupiter is the undisputed king of the solar system—a gas giant so massive it could swallow all the other planets combined and still have room to spare.</p>`;
    score += 1;
  } else if (currentAnswer === "Saturn") {
    outputBox.innerHTML += `<p>Saturn is famous for its stunning, complex rings, but this gas giant also holds records for being the least dense planet and the current "moon king" of the solar system.</p>`;
    score += 1;
  } else if (currentAnswer === "Uranus") {
    outputBox.innerHTML += `<p>Uranus is the solar system’s resident "oddball"—an ice giant that refuses to follow the rules of how a planet should behave.</p>`;
    score += 1;
  } else if (currentAnswer === "Neptune") {
    outputBox.innerHTML += `<p>Neptune is a dark, cold, and supersonic ice giant located 30 times farther from the Sun than Earth.</p>`;
    score += 1;
  } else if (currentAnswer === "Pluto") {
    // Secret bonus answer - Pluto was reclassified as a dwarf planet in 2006
    outputBox.innerHTML += `<p>Reclassified as a dwarf planet in 2006, Pluto proved to be far more complex than a "dead rock" when the New Horizons mission flew by in 2015.</p>`;
    score += 1;
  } else {
    // If no conditions match, show an error message
    statusBox.innerHTML += `Sorry, but ${currentAnswer} is not a planet.`;
    score += 1;
  }

  // After checking the answer, verify if the game is complete
  checkScore();

  // Reset the text box for the next answer
  textBox.value = "";
};

// --------------------------------------------
// STEP 4: CREATE THE SCORE-CHECKING FUNCTION
// --------------------------------------------
// This function checks if the player has won the game.
// It updates the status message based on their progress.
//
// TODO: Check two conditions:
//   1. If score equals 8, display a congratulations message
//   2. If score equals 8 AND they found the bonus, display a special message
//      and disable the input box (textBox.disabled = true)
// --------------------------------------------

const checkScore = () => {
  if (score === 8) {
    statusBox.innerHTML = "You found all the main planets!";
  }
  if (score === 8 && pluto) {
    statusBox.innerHTML = "Are you an astronaut??? You found all of them!";
    // Disable the text box since the game is complete
    textBox.disabled = true;
  }
};

// --------------------------------------------
// STEP 5: ADD AN EVENT LISTENER
// --------------------------------------------
// Event listeners "listen" for specific events (like clicks, key presses, etc.)
// and run a function when that event occurs.
//
// addEventListener() takes two arguments:
//   1. The event type (as a string): "change", "click", "keydown", etc.
//   2. The function to run when the event happens
//
// The "change" event fires when the user changes the input and leaves the field
// (usually by pressing Enter or clicking elsewhere)
//
// TODO: Add an event listener to textBox that:
//   - Listens for the "change" event
//   - Calls the checkAnswer function when triggered
// --------------------------------------------

textBox.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkAnswer();
  }
});
