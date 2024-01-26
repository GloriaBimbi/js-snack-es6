// SNACK 2 IN GRUPPI: abbiamo un array di oggetti (frutta) con titolo e prezzo.
// generiamo un numero randomico che si riferisce ai frutti da mettere in macedonia.
// Sommiamo il numero frutti uscito dell'array e diciamo quanto costa la macedonia in totale.

const products = [
  { title: "Mela", price: 2.3 },
  { title: "Banana", price: 1.5 },
  { title: "Mango", price: 2 },
  { title: "Pesca", price: 1.8 },
  { title: "Pera", price: 1.5 },
  { title: "Arancia", price: 2.2 },
];

const number = generateRandomNumber(1, 6);
console.log("Numero randomico: " + number);

let price = products[0].price;
let ingredienti = products[0].title;

for (i = 1; i < number; i++) {
  price += products[i].price;
  ingredienti = ingredienti + ", " + products[i].title;
}
console.log(
  `Il prezzo totale della macedonia di ${ingredienti} è di: €${price}`
);
