function estNombrePremier(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function sommeNombresPremiers(a, b) {
    if (estNombrePremier(a) && estNombrePremier(b)) {
        console.log("La somme des nombres premiers est :", a + b);
    } else {
        console.log("False");
    }
}

function calculateSum() {
    var number1 = parseInt(prompt("Entrez le premier nombre :"));
    var number2 = parseInt(prompt("Entrez le deuxième nombre :"));

    if (isNaN(number1) || isNaN(number2)) {
        console.log("Veuillez entrer deux nombres valides.");
        return;
    }

    sommeNombresPremiers(number1, number2);
}
