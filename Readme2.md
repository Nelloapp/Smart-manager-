# 🍽️ Ristorante Manager PWA

Gestionale per ristoranti installabile su telefono/tablet/computer.

## 🧩 Funzioni Principali
- Mappa tavoli interattiva
- Gestione ordini al tavolo
- Dashboard admin (incassi, statistiche)
- Installabile come PWA
- Sincronizzazione tramite Firebase

## 🔧 Requisiti
- Firebase configurato (vedi `firebase-config.js`)
- Collection Firestore: `tavoli`, `menu`, `ordini`, `utenti`
- Firebase Authentication abilitato (metodo: Email/password)

## 📱 Come Usarlo Su Telefono
1. Scarica il progetto da GitHub
2. Apri `index.html` con Chrome o Kiwi Browser
3. Crea tavoli su Firebase Console
4. Usa l’app come PWA (aggiungi a Home Screen)

## 📦 File con i Tuoi Dati Firebase
- `firebase-config.js` → contiene i tuoi dati Firebase  
- `index.html`, `menu.html`, `ordini.html`, `login.html` → caricano `firebase-config.js` → usano i tuoi dati Firebase

> ⚠️ Nota: Per motivi di sicurezza, in produzione limita le regole di Firestore e abilita l'autenticazione.

## 🚀 Prossimi Passaggi
- Abilita login utenti
- Simula la stampa ordini
- Espandi la dashboard admin
