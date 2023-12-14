// Funzione per gestire l'inserimento di nuove attività nella lista
function gestoreInserisci() {
  try {
    // Ottenimento del valore dell'input per la nuova attivtà
    var nodoNuovaAttivita = nodoAttivita.value;

    // Controllo dell'input, se è vuoto e mostra un errore
    if (nodoNuovaAttivita == "") {
      alert("Non è stata inserita un'attività.");
      return;
    }
    
    // Controllo della lunghezza dell'input
    if (nodoNuovaAttivita.length > 60) {
      alert("L'attività inserita ha un numero di caratteri eccessivo, per favore, inserire una stringa più breve");
      return;
    }

    // Creazione di un nuovo elemento della lista
    var nodoNuovoElementoLista = document.createElement("li");
    nodoNuovoElementoLista.appendChild(document.createTextNode(nodoNuovaAttivita));

    // Creazione dinamica del bottone "completata" (cfr. gestoreCompleta)
    var nodoBottoneCompleta = document.createElement("button");
    nodoBottoneCompleta.id = "completa";
    nodoBottoneCompleta.appendChild(document.createTextNode("Completata"));
    nodoNuovoElementoLista.appendChild(nodoBottoneCompleta);
    
    nodoBottoneCompleta.onclick = function() {
      gestoreCompleta(nodoNuovoElementoLista);
    };
    
    
    // Creazione dinamica del bottone "modifica" (cfr. gestoreModifica)
    var nodoBottoneModifica = document.createElement("button");
    nodoBottoneModifica.id = "modifica";
    nodoBottoneModifica.appendChild(document.createTextNode("Modifica"));
    nodoNuovoElementoLista.appendChild(nodoBottoneModifica);
    
    nodoBottoneModifica.onclick = function() {
      gestoreModifica(nodoNuovoElementoLista);
    }; 

    // Creazione dinamica del bottone "Elimina" (cfr. gestoreElimina)
    var nodoBottoneElimina = document.createElement("button");
    nodoBottoneElimina.id = "elimina";
    nodoBottoneElimina.appendChild(document.createTextNode("Elimina"));
    nodoNuovoElementoLista.appendChild(nodoBottoneElimina);
    
    nodoBottoneElimina.onclick = function() {
      gestoreElimina(nodoNuovoElementoLista);
    };
 
    // Aggiunta dell'attività alla lista
    document.getElementById("listaAttivita").appendChild(nodoNuovoElementoLista);
    
    // Reset dell'input dopo l'inserimento
    nodoAttivita.value = "";
  } catch (e) {
    alert("gestoreInserisci " + e);
  }
}

// Funzione per gestire il completamento di un'attività della lista
function gestoreCompleta(attivita){
  try {
    var nodoBarra = document.createElement("del");
    nodoBarra.appendChild(document.createTextNode(attivita.childNodes[0].textContent));
    attivita.childNodes[0].replaceWith(nodoBarra);
    } catch ( e ) {
    alert("gestoreCompleta " + e)    
  }
}

// Funzione per gestire l'eliminazione di un'attività dalla lista
function gestoreElimina(attivita) {
  try {
    attivita.parentNode.removeChild(attivita);
  } catch ( e ) {
    alert("gestoreElimina " + e);
  }
}

// Funzione per gestire la modifica di un'attività della lista
function gestoreModifica(attivita) {
  try {
    var nuovoTesto = prompt("Modifica attività:", attivita.childNodes[0].textContent);
    
    if (nuovoTesto == "") {
      alert("L'attività non è stata modificata");
      return;
    }

    if (nuovoTesto.length > 60) {
      alert("L'attività modificata ha un numero di caratteri eccessivo, per favore, inserire una stringa più breve");
      return;
    }

    attivita.childNodes[0].textContent = nuovoTesto;
  } catch (e) {
    alert("gestoreModifica " + e);
  }
}

// Variabili utilzzate
var nodoAttivita;
var nodoNuovaAttivita;
var nodoNuovoElementoLista;
var nodoInserisci;
var nodoBottoneCompleta;
var nodoBottoneModifica;
var nodoBottoneElimina;
var nodoBarra;
var nuovoTesto;

// Funzione che collega HTML a JS
function gestoreLoad() {
  try {
    nodoAttivita = document.getElementById("attivita");
    nodoInserisci = document.getElementById("inserisci");
    nodoAttivita.value = "";
    nodoInserisci.onclick = gestoreInserisci;
  } catch (e) {
    alert("gestoreLoad " + e);
  }
}

window.onload = gestoreLoad;