const teams = [
  {
    name: "Team Turtle",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Frog",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Penguin",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Hippopotamus",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Seal",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Crocodile",
    score: 0,
    foul: 0,
  },
  {
    name: "Team Dolphin",
    score: 0,
    foul: 0,
  },
];

// creo un array che conterrà gli oggetti con le chiavi nome e falli subiti
const newTeamsArray = [];

// creo un ciclo che scorre l'array delle squadre
teams.forEach((team) => {
  //con il destructing estraggo le variabili nome, punteggio e falloi subiti
  let { name, score, foul } = team;
  // genero casualmente il numero di punti fatti e dei falli subiti in un range scelto da me che va da 0 a 10
  score = generateRandomNumber(0, 10);
  foul = generateRandomNumber(0, 10);
  console.log(`Punteggio: ${score}; Falli subiti: ${foul}`);
  // nel nuovo array di squadre inserisco degli oggetti che contengono solo il nome e i falli subiti
  newTeamsArray.push({
    name,
    foul,
  });
});
// stampo in console il nuovo array di squdre
console.log(newTeamsArray);
