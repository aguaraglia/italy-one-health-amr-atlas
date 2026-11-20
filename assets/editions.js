/* Basi delle edizioni regionali. Gli href nel markup sono il fallback senza JavaScript e devono restare uguali. */
(function () {
  var editions = {
    "valle-d-aosta": "https://valle-d-aosta.atlanteamr.it/",
    piemonte: "https://piemonte.atlanteamr.it/",
    lombardia: "https://lombardia.atlanteamr.it/",
    "trentino-alto-adige": "https://trentino-alto-adige.atlanteamr.it/",
    veneto: "https://veneto.atlanteamr.it/",
    "friuli-venezia-giulia": "https://friuli-venezia-giulia.atlanteamr.it/",
    liguria: "https://liguria.atlanteamr.it/",
    "emilia-romagna": "https://emilia-romagna.atlanteamr.it/",
    toscana: "https://toscana.atlanteamr.it/",
    umbria: "https://umbria.atlanteamr.it/",
    marche: "https://marche.atlanteamr.it/",
    lazio: "https://lazio.atlanteamr.it/",
    abruzzo: "https://abruzzo.atlanteamr.it/",
    molise: "https://molise.atlanteamr.it/",
    campania: "https://campania.atlanteamr.it/",
    puglia: "https://puglia.atlanteamr.it/",
    basilicata: "https://basilicata.atlanteamr.it/",
    calabria: "https://calabria.atlanteamr.it/",
    sardegna: "https://sardegna.atlanteamr.it/",
    sicilia: "https://sicilia.atlanteamr.it/"
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
