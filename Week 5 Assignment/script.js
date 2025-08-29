// ==============================
// Part 1: Variable Declarations & Conditionals
// ==============================

// Variables
let userName = "Student"; // can change
const MAX_TIPS = 5;       // constant
var levelOfAwareness = 1;  // old style, for demo

// Conditional
if (levelOfAwareness < 3) {
    console.log(`${userName} is just starting to learn about mental health.`);
} else {
    console.log(`${userName} is quite aware of mental health topics.`);
}

// ==============================
// Part 2: Custom Functions
// ==============================

// Function Declaration
function greetUser(name) {
    return `Hello, ${name}! Welcome to Mental Health Awareness.`;
}
console.log(greetUser(userName));

// Function Expression
const addNumbers = function(a, b) {
    return a + b;
}
console.log(addNumbers(2, 3)); // Example use

// ==============================
// Part 3: Loops
// ==============================

// For loop: show levels of awareness
for (let i = 1; i <= 3; i++) {
    console.log(`Awareness level ${i}`);
}

// While loop: display encouragement
let count = 1;
while (count <= 3) {
    console.log(`Keep learning! Step ${count}`);
    count++;
}

// ==============================
// Part 4: DOM Interactions
// ==============================

// 1. Display a random mental health tip on button click
const btnShowTip = document.getElementById("btnShowTip");
const tipMessage = document.getElementById("tipMessage");

const tips = [
    "Take a short walk to clear your mind.",
    "Practice deep breathing exercises.",
    "Talk to someone you trust about your feelings.",
    "Keep a gratitude journal.",
    "Listen to calming music."
];

btnShowTip.addEventListener("click", () => {
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    tipMessage.textContent = randomTip;
});

// 2. Adding coping strategies dynamically
const btnAddStrategy = document.getElementById("btnAddStrategy");
const strategiesList = document.getElementById("strategiesList");
let strategyCount = 1;

btnAddStrategy.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = `Strategy ${strategyCount}: Take a mindful break.`;
    strategiesList.appendChild(newItem);
    strategyCount++;
});

// 3. Motivational message on hover
const highlightText = document.querySelector(".highlight");
highlightText.addEventListener("mouseover", () => {
    highlightText.textContent = "You are doing great! Keep it up!";
});
highlightText.addEventListener("mouseout", () => {
    highlightText.textContent = "Hover over me to get a motivational message!";
});
