// app.js

// Recupera il contenitore dei tavoli
const container = document.getElementById('tavoli-container');

// Leggi i tavoli da Firebase
db.collection("tavoli").onSnapshot(snapshot => {
  container.innerHTML = '';
  snapshot.forEach(doc => {
    const tavolo = doc.data();
    const div = document.createElement('div');
    div.className = `tavolo ${tavolo.stato}`;
    div.textContent = `Tavolo ${tavolo.numero}\n${tavolo.stato}`;

    // Cambia stato del tavolo al click
    div.onclick = () => {
      tavolo.stato = tavolo.stato === 'libero' ? 'occupato' : 'libero';
      db.collection("tavoli").doc(doc.id).update(tavolo);
    };

    container.appendChild(div);
  });
});
