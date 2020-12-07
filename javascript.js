function laskutehtava(ekaNumero, tokaNumero){
  return (ekaNumero + tokaNumero);
} 

 console.log("hello");
  let ika = 17;
  
  ika = ika + 1;

console.log(ika)

const pii=3.14;

console.log('piin likiarvo ' + pii);

const etunimi='Eetu'
const sukunimi= 'Tuominen'
const syntymavuosi='2003'
const lahtelainen=true; //boolean
let naarittelematon; //undefined 

console.log("syntymävuoden tyyppi:" + typeof syntymävuosi);
console.log("Nimen tyyppi:" + typeof etunimi);
console.log("lahtelaisuuden tyyppi:" + typeof lahtelainen);

console.log('nimeni on ' + etunimi +' ' +sukunimi + ' ja syntymävuoteni on ' + syntymavuosi);

const henkilotiedot=(`Nimeni on ${etunimi} ${sukunimi} ja syntymävuoteni on ${syntymavuosi}`);