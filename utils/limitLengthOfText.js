export default function limitLengthOfText(text, limit) {
    if (text.length > limit) {
        // Si la longueur dépasse la limite, on tronque la chaîne et on ajoute des points de suspension
        return text.substring(0, limit) + "...";
    } else {
        // Sinon, on renvoie la chaîne telle quelle
        return text;
    }
}

// // Exemple d'utilisation
// var texteLong = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
// var texteLimite = limitLengthOfText(texteLong, 20);

// console.log(texteLimite);
