// DARK/LIGHT MODE

const toggle = document.querySelector(".toggle");
const circle = document.getElementById("circle");
const border = document.querySelector(".card");
const card = document.querySelector(".card__description");
//local storage theme
let darkMode = localStorage.getItem("darkMode");

const enableDarkMode = () => {
    circle.classList.remove("circle-light"); 
    circle.classList.add("circle-dark");
    toggle.style.backgroundColor = "#FBF7EE";
    document.body.style.backgroundColor = "#1C1C1C";
    border.style.borderColor = "#FBF7EE";
    card.style.backgroundColor = "#1F2937";
    card.style.color = "#FBF7EE";
    

    localStorage.setItem("darkMode", "enabled")
} 

const disableDarkMode = () => {
    circle.classList.remove("circle-dark");
    circle.classList.add("circle-light");
    toggle.style.backgroundColor = "#1C1C1C";
    document.body.style.backgroundColor = "#FBF7EE";
    border.style.borderColor = "#1F2937";
    card.style.backgroundColor = "#FBF7EE";
    card.style.color = "#1F2937";

    localStorage.setItem("darkMode", null);
} 

if (darkMode === "enabled") {
    enableDarkMode();
}

toggle.addEventListener('click', () => {
    darkMode = localStorage.getItem("darkMode");
    if (darkMode !== "enabled"){
        enableDarkMode();
        console.log(darkMode);
    }else {
        disableDarkMode();
        console.log(darkMode);
    }
})


