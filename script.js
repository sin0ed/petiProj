// Liste des pays
var listePays = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan"
];

document.getElementById("pays").addEventListener("input", function (e) {
    var saisi = e.target.value; // Valeur saisie dans le champ mdp
    var divElt = document.getElementById("suggestions");
    divElt.innerHTML = "";
    listePays.forEach (function (pays) {
      if (pays.toLowerCase().indexOf(saisi.toLowerCase()) === 0) {
	var pElt = document.createElement("p");
	pElt.textContent = pays;
	pElt.addEventListener("click", function () {
	  document.getElementById("pays").value = pays;
	  divElt.innerHTML = "";
   	  });
	document.getElementById("suggestions").appendChild(pElt);
	};
    });
});

