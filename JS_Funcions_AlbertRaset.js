//Exercici 5
function vocal(str){
    const contar = str.match(/[aeiou]/gi).length;
    return contar;
}
const text = prompt('Introdueix un text:');
const resultat = vocal(text);
console.log('Vocals: ' + resultat);