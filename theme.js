// DARK/LIGHT MODE
const toggle = document.querySelector(".toggle");
const circle = document.getElementById("circle");
const border = document.querySelector(".card");
const card = document.querySelector(".card__description");
//local storage theme
let darkMode = localStorage.getItem("darkMode");

let white = "#FBF7EE";
let dark = "#1C1C1C";
let darkSecondary = "#1F2937";

const enableDarkMode = () => {
    circle.classList.remove("circle-light"); 
    circle.classList.add("circle-dark");
    toggle.style.backgroundColor = white;
    document.body.style.backgroundColor = dark;
    border.style.borderColor = white;
    card.style.backgroundColor = darkSecondary;
    card.style.color = white;

    localStorage.setItem("darkMode", "enabled")
} 

const disableDarkMode = () => {
    circle.classList.remove("circle-dark");
    circle.classList.add("circle-light");
    toggle.style.backgroundColor = dark;
    document.body.style.backgroundColor = white;
    border.style.borderColor = darkSecondary;
    card.style.backgroundColor = white;
    card.style.color = darkSecondary;

    localStorage.setItem("darkMode", null);
} 

if (darkMode === "enabled") {
    enableDarkMode();
}

toggle.addEventListener('click', () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled"){
        enableDarkMode();
    }else {
        disableDarkMode();
    }
})


