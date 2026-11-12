/* Basi delle edizioni regionali: sardegna, lombardia ed emilia-romagna.atlanteamr.it.
   Gli href nel markup sono il fallback senza JavaScript e devono restare uguali. */
(function () {
  var editions = {
    sardegna: "https://sardegna.atlanteamr.it/",
    lombardia: "https://lombardia.atlanteamr.it/",
    "emilia-romagna": "https://emilia-romagna.atlanteamr.it/"
  };
  var nodes = document.querySelectorAll("[data-edition]");
  for (var i = 0; i < nodes.length; i++) {
    var url = editions[nodes[i].getAttribute("data-edition")];
    if (url) nodes[i].setAttribute("href", url);
  }
})();
