let buttons = document.getElementsByTagName('button'); /*permet d'initialiser une variable contenant toutes les balises button*/
for (let i = 0; i < buttons.length; i++) { /*créé la boucle qui va permettre de lier chaque bouton à la fonction */
  buttons[i].onclick = function(event) { /*active le clique du bouton et le relie à la fonction avec pour parametre "event" */
    //*event.currentTarget.parentNode.style.background = 'yellow'*/ /*parentNode et la propriété de la method currenTarget*/ 
    let a = event.currentTarget.parentNode;  /*initialise une variable pour ne pas avoir à recopier sa valeur */
    a.style.background=="yellow" ? a.style.background="" : a.style.background= "yellow"; 
  };/* conditions ternaire pour intégrer la désactivation de la fonction pour la fonction basique CF code commentaire ligne 4*/  
}