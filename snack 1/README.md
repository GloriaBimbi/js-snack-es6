# Snack 1

### CONSEGNA:

Dwayne Johnson ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip.
Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:

```javascript
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
```

La tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in un formato specifico, per cui dobbiamo fare in modo che ogni ospite sia un oggetto javascript che ha come attributi:
nome del tavolo,
nome dell'ospite,
posto occupato.
Generiamo e stampiamo in console l'array di oggetti per i segnaposto.

## SVOLGIMENTO:

- STEP 1: modifico l'array sostituendo alla stringa del nome di ogni vip, un oggetto che contiene il numero del tavolo, il suo nome e il suo posto (utilizzando il ciclo map)

- STEP 2: stampo in console il nuovo array di oggetti per i segnaposto
