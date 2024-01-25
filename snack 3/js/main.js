// creo un array di oggetti in cui ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

const bicicles = [
  {
    name: "Scott",
    weightInKg: 7.6,
  },
  {
    name: "Bianchi",
    weightInKg: 8,
  },
  {
    name: "Look",
    weightInKg: 5.7,
  },
  {
    name: "KTM",
    weightInKg: 6.5,
  },
  {
    name: "Colnago",
    weightInKg: 9.6,
  },
];
// stampo in console la bici con peso minore utilizzando destructuring e
// template literal

let minWeight = 10;
biciclesWeight = [];

bicicles.forEach((bicicle, index) => {
  const { name, weightInKg } = bicicle;
  console.log(`La bici numero ${index + 1} si chiama: ${name}`);
  biciclesWeight.push(weightInKg);
});
console.log(biciclesWeight);

for (i = 0; i < biciclesWeight.length; i++) {
  if (biciclesWeight[i] < biciclesWeight[i + 1]) {
    minWeight = biciclesWeight[i];
    console.log(
      biciclesWeight[i] +
        "<" +
        biciclesWeight[i + 1] +
        " quindi la bici che pesa meno, pesa: " +
        minWeight
    );
  }
}

console.log("la bici con il peso minore pesa: " + minWeight);

// for (let i = 0; i < bicicles.length; i++) {
//   const { name, weightInKg } = bicicles[i];
//   console.log(`La bici numero ${i + 1} si chiama ${name} e pesa ${weightInKg}`);
//   if (weightInKg < weightInKg)
// }
