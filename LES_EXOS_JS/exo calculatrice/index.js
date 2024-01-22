function egal(){
let terme1 = document.getElementById("premierNombre").value;
let terme2 = document.getElementById("deuxiemeNombre").value;
let resultat = parseInt(terme1) + parseInt(terme2);
document.getElementById('resultat').value = resultat;
}