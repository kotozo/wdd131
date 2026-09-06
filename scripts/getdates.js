// Année courante
const currentYear = new Date().getFullYear();

// Insertion dans le span
document.getElementById("currentyear").textContent = currentYear;

// Date de dernière modification
document.getElementById("lastModified").textContent = "This page was last modified on: " + document.lastModified;
