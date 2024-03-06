const counterElement = $("#counter");

// Leggi il valore attuale dal file JSON e visualizzalo
$.getJSON("counter.json", (data) => {
  const counterValue = data.counter || 0;
  counterElement.text(counterValue);
});

// Aggiungi un listener al bottone per incrementare il contatore
$("#incrementButton").on("click", () => {
  $.getJSON("counter.json", (data) => {
    const counterValue = (data.counter || 0) + 1;
    counterElement.text(counterValue);

    // Scrivi il nuovo valore nel file JSON
    $.ajax({
      type: "PUT",
      url: "https://api.staticaly.com/v1/github/lucamorara/lucamorara.github.io/HEAD/counter.json",
      data: JSON.stringify({ counter: counterValue }),
      contentType: "application/json",
    });
  });
});
