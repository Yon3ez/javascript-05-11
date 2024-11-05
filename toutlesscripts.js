function addition(a, b) {
	return a + b;
}
console.log(addition(5, 3));

-function salutation(nom) {
	return nom;
};
console.log(salutation("Bonjour Alice"));

-3;

function estPair(nombre) {
	return nombre % 2 === 0;
}
console.log(estPair(4));
console.log(estPair(7));

-4;

function aireRectangle(longueur, largeur) {
	return longueur * largeur;
}
console.log(aireRectangle(5, 3));

-5;
function estMajuscule(chaine) {
	return chaine === chaine.toUpperCase();
}

console.log(estMajuscule("HELLO"));
console.log(estMajuscule("Hello"));

-6;
function maxDeuxNombres(a, b) {
	return Math.max(a, b);
}
console.log(maxDeuxNombres(5, 10)); // Résultat attendu : 10

-7;
function difference(a, b) {
	return a - b;
}
console.log(difference(10, 3)); // Résultat attendu : 7

-8;
function convertirEnCelsius(fahrenheit) {
	return ((fahrenheit - 32) * 5) / 9;
}
console.log(convertirEnCelsius(100)); // Résultat attendu : 37.7778

-9;
function estPlusGrandOuPlusPetit(nombre) {
	if (nombre > 18) {
		return true;
	} else {
		return false;
	}
}
console.log(estPlusGrandOuPlusPetit(20)); // Devrait afficher true
console.log(estPlusGrandOuPlusPetit(16)); // Devrait afficher false

-10;
function maxTroisNombres(a, b, c) {
	return Math.max(a, b, c);
}
console.log(maxTroisNombres(3, 7, 5)); // Résultat attendu : 7

-11;
function calculer(a, b, operation) {
	return operation(a, b);
}
function addition(x, y) {
	return x + y;
}
function multiplication(x, y) {
	return x * y;
}

console.log(calculer(5, 3, addition)); // Résultat attendu : 8
console.log(calculer(5, 3, multiplication)); // Résultat attendu : 15
