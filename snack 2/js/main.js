const students = [
  {
    id: 213,
    name: "Marco della Rovere",
    grades: 78,
  },
  {
    id: 110,
    name: "Paola Cortellessa",
    grades: 96,
  },
  {
    id: 250,
    name: "Andrea Mantegna",
    grades: 48,
  },
  {
    id: 145,
    name: "Gaia Borromini",
    grades: 74,
  },
  {
    id: 196,
    name: "Luigi Grimaldello",
    grades: 68,
  },
  {
    id: 102,
    name: "Piero della Francesca",
    grades: 50,
  },
  {
    id: 120,
    name: "Francesca da Polenta",
    grades: 84,
  },
];
console.log(students);

// creo un array di stringhe contenente il loro nome tutto in maiuscolo
const studentsNames = students.map((student) => student.name.toUpperCase());
console.log(studentsNames);

// creo un array di oggetti "studente" che hanno un totale di voti superiore a 70
const goodStudents = students.filter((student) => student.grades > 70);
console.log(goodStudents);

// creo un array di oggetti "studente" che hanno un totale di voti superiore a 70 e id superiore a 120
const greatStudents = students.filter(
  (student) => student.grades > 70 && student.id > 120
);
console.log(greatStudents);
