/* Basi delle edizioni regionali. Gli href nel markup sono il fallback senza JavaScript e devono restare uguali.
   Lombardia, Emilia-Romagna e Sardegna restano sui sottodomini atlanteamr.it. */
(function () {
  var editions = {
    "valle-d-aosta": "https://aguaraglia.github.io/valle-d-aosta-one-health-amr-atlas/",
    piemonte: "https://aguaraglia.github.io/piemonte-one-health-amr-atlas/",
    lombardia: "https://lombardia.atlanteamr.it/",
    "trentino-alto-adige": "https://aguaraglia.github.io/trentino-alto-adige-one-health-amr-atlas/",
    veneto: "https://aguaraglia.github.io/veneto-one-health-amr-atlas/",
    "friuli-venezia-giulia": "https://aguaraglia.github.io/friuli-venezia-giulia-one-health-amr-atlas/",
    liguria: "https://aguaraglia.github.io/liguria-one-health-amr-atlas/",
    "emilia-romagna": "https://emilia-romagna.atlanteamr.it/",
    toscana: "https://aguaraglia.github.io/toscana-one-health-amr-atlas/",
    umbria: "https://aguaraglia.github.io/umbria-one-health-amr-atlas/",
    marche: "https://aguaraglia.github.io/marche-one-health-amr-atlas/",
    lazio: "https://aguaraglia.github.io/lazio-one-health-amr-atlas/",
    abruzzo: "https://aguaraglia.github.io/abruzzo-one-health-amr-atlas/",
    molise: "https://aguaraglia.github.io/molise-one-health-amr-atlas/",
    campania: "https://aguaraglia.github.io/campania-one-health-amr-atlas/",
    sardegna: "https://sardegna.atlanteamr.it/"
  };
  var nodes = document.querySelectorAll("[data-edition]");
  for (var i = 0; i < nodes.length; i++) {
    var url = editions[nodes[i].getAttribute("data-edition")];
    if (url) nodes[i].setAttribute("href", url);
  }

  function closeRegionMenus(except) {
    var open = document.querySelectorAll(".region-menu[open]");
    for (var j = 0; j < open.length; j++) {
      if (open[j] !== except) open[j].removeAttribute("open");
    }
  }

  document.addEventListener("click", function (event) {
    var menu = event.target.closest ? event.target.closest(".region-menu") : null;
    closeRegionMenus(menu);
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") closeRegionMenus(null);
  });
})();
