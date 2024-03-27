function tri(numbers, order) {
    if (order === "asc") {
        return numbers.sort((a, b) => a - b);
    } else if (order === "desc") {
        return numbers.sort((a, b) => b - a);
    } else {
        console.error("L'ordre de tri spécifié n'est pas valide. Veuillez choisir 'asc' ou 'desc'.");
        return numbers; // Retourne le tableau non trié en cas d'erreur
    }
}

function performSorting() {
    var numbersInput = document.getElementById("numbersInput").value;
    var orderSelect = document.getElementById("orderSelect");
    var order = orderSelect.options[orderSelect.selectedIndex].value;

    var numbersArray = numbersInput.split(",").map(number => parseInt(number.trim()));

    var resultElement = document.getElementById("result");

    if (numbersArray.some(isNaN)) {
        resultElement.textContent = "Veuillez entrer des nombres valides, séparés par des virgules.";
        return;
    }

    var sortedNumbers = tri(numbersArray, order);
    resultElement.textContent = "Le tableau trié est : " + sortedNumbers.join(", ");
}
