const vips = [
  "Dwayne Johnson",
  "Brad Pitt",
  "Johnny Depp",
  "Lady Gaga",
  "Cristiano Ronaldo",
  "Georgina Rodriguez",
  "Chiara Ferragni",
  "Fedez",
  "George Clooney",
  "Amal Clooney",
  "Maneskin",
];

// modifico l'array sostituendo alla stringa del nome di ogni vip, un oggetto che contiene il numero del tavolo, il suo nome e il suo posto
const vipsDetails = vips.map((vip, index) => {
  return {
    tableName: "Tavolo Vip",
    vipName: vip,
    spotNumber: index + 1,
  };
});
// stampo in console l'array di oggetti per i segnaposto
console.log(vipsDetails);
