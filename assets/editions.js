/* Basi delle edizioni regionali. Per passare ai sottodomini
   (sardegna, lombardia, emilia-romagna).atlanteamr.it aggiornare solo questo oggetto.
   Gli href nel markup sono il fallback senza JavaScript e devono restare uguali. */
(function () {
  var editions = {
    sardegna: "https://aguaraglia.github.io/sardinia-one-health-amr-atlas/",
    lombardia: "https://aguaraglia.github.io/lombardy-one-health-amr-atlas/",
    "emilia-romagna": "https://aguaraglia.github.io/emilia-romagna-one-health-amr-atlas/"
  };
  var nodes = document.querySelectorAll("[data-edition]");
  for (var i = 0; i < nodes.length; i++) {
    var url = editions[nodes[i].getAttribute("data-edition")];
    if (url) nodes[i].setAttribute("href", url);
  }
})();
