function estJourFerie(date) {
    const annee = date.getFullYear();
    const mois = date.getMonth() + 1; // Les mois sont indexés de 0 à 11, donc on ajoute 1
    const jour = date.getDate();

    // Tableau des jours fériés de l'année 2024
    const joursFeries2024 = [
        "2024-01-01", // Nouvel An
        "2024-04-01", // Lundi de Pâques
        "2024-05-01", // Fête du Travail
        "2024-05-08", // Victoire des Alliés
        "2024-05-30", // Ascension
        "2024-06-09", // Lundi de Pentecôte
        "2024-07-14", // Fête Nationale
        "2024-08-15", // Assomption
        "2024-11-01", // Toussaint
        "2024-11-11", // Armistice
        "2024-12-25"  // Noël
    ];

    // Vérifier si la date est un jour férié
    const dateString = `${annee}-${mois.toString().padStart(2, '0')}-${jour.toString().padStart(2, '0')}`;
    return joursFeries2024.includes(dateString);
}

function estWeekend(date) {
    const jourSemaine = date.getDay(); // 0 pour dimanche, 1 pour lundi, ..., 6 pour samedi
    return jourSemaine === 0 || jourSemaine === 6;
}

function jourTravaille(date) {
    const annee = date.getFullYear();
    const mois = date.getMonth() + 1; // Les mois sont indexés de 0 à 11, donc on ajoute 1
    const jour = date.getDate();

    if (estJourFerie(date)) {
        console.log(`Le ${jour}/${mois}/${annee} est un jour férié.`);
    } else if (estWeekend(date)) {
        console.log(`Non, ${jour}/${mois}/${annee} est un week-end.`);
    } else {
        console.log(`Oui, ${jour}/${mois}/${annee} est un jour travaillé.`);
    }
}

function checkDay() {
    var inputDate = document.getElementById("dateInput").value;
    var date = new Date(inputDate);

    if (isNaN(date.getTime())) {
        console.log("Veuillez entrer une date valide (YYYY-MM-DD).");
        return;
    }

    jourTravaille(date);
}



