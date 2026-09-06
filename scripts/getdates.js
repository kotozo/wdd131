// Année courante
const currentYear = new Date().getFullYear();

// Insertion dans le span
document.getElementById("currentyear").textContent = currentYear;

// Date de dernière modification
document.getElementById("lastmodified").textContent =
    `Last Modification: ${document.lastModified}`;