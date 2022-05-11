

let somma = prompt('15+5');
if(somma == 20) {
    document.getElementById('quiz1').innerHTML = 'giusta';
    console.log('Risposta giusta')
    alert('Bravo!')
}else {
    document.getElementById('quiz1').innerHTML = 'sbagliata';
    console.log('Risposta sbagliata')
    alert('Riprova, sarai più fortunato')
}

let quoziente = prompt('275/25');
if (quoziente == 11) {
    document.getElementById('quiz2').innerHTML = 'giusta';
    console.log('Risposta giusta')
    alert('Ci sai fare con i numeri!')
} else {
    document.getElementById('quiz2').innerHTML = 'sbagliata';
    console.log('Risposta sbagliata')
    alert('Non ci siamo proprio...')
}

let prodotto = prompt('33*33');
if (prodotto == 1089) {
    document.getElementById('quiz3').innerHTML = 'giusta';
    console.log('Risposta giusta')
    alert('Non stai deludendo le aspettative')
} else {
    document.getElementById('quiz3').innerHTML = 'sbagliata';
    console.log('Risposta sbagliata')
    alert('Sbagliato, ma non abbatterti!')

}

let sottrazione = prompt('200-99');
if (sottrazione == 101) {
    document.getElementById('quiz4').innerHTML = 'giusta';
    console.log('Risposta giusta')
    alert('Complimenti!')
} else {
    document.getElementById('quiz4').innerHTML = 'sbagliata';
    console.log('Risposta sbagliata')
    alert('Fai bene i conti!')

}

const pgreco = 3.14;
const e = 2.71828;
let numero= 5;

if(numero %2==0 || numero <= 4 || numero != 1) {
 console.log(numero * pgreco)

}else{
   console.log(numero * e)
}

if(numero >=4 || numero <=5 || numero !=4 || ) {
    console.log(numero * e)
}else{
    console.log(numer * pgreco)
}



