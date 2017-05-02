/** Cette fonction retourne une chaine
 * pour dire bonjour
 * @type {string} le nom de la personne
 */

export function bonjour(nom: string = 'le monde !') {
    return `Bonjour ${nom}`;
}

let user: string = 'Zenika';
console.log(bonjour(user));

