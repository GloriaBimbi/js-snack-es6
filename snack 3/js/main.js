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

// prendo l'elemento html che mi serve
const minWeight = document.getElementById("min-weight");

// con il destructoring salvo una bicicletta per poterla confrontare con le altre
let [lighterBicicle] = bicicles;
console.log(lighterBicicle);

// creo un ciclo forEach che con il destructing crea le variabili name e weightInKg delle biciclette dell'array bicicles
bicicles.forEach((bicicle) => {
  const { weightInKg: currentWeight } = bicicle;
  const { weightInKg: ligherWeight } = lighterBicicle;
  // con un if trovo la bicicletta dal peso minore
  if (currentWeight < ligherWeight) lighterBicicle = bicicle;
});

// stampo in console che la bicicletta dal peso minore fa riferimento all'elemento in posizione 0 dell'array dei pesi
console.log(
  `La bicicletta ${lighterBicicle.name} è quella che pesa di meno e pesa ${lighterBicicle.weightInKg} kg`
);

// stampo su pagina la dicitura che annuncia la bicicletta meno pesante
minWeight.innerHTML = `<h2> La bicicletta ${lighterBicicle.name} è quella che pesa di meno e pesa ${lighterBicicle.weightInKg} kg </h2>`;
