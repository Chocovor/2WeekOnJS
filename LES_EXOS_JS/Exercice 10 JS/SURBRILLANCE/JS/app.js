/*PREMIERE CONSIGNE DE L'EXERCICE: mettre le fond du second paragraphe en jaune*/
/*let element= document.getElementById("second");
element.style.backgroundColor="yellow";*/ 

/*SECONDE CONSIGNE DE L'EXERCICE: mettre le fond jaune des paragraphes seulement après un click*/
/*document.getElementsByClassName("article").addeventListener("click",
function a (){
 let brillance = document.querySelectorAll(".article");
 brillance.forEach(function a(element){
    if (element.classList.contains("article")){
     return element.style.backgroundColor="yellow"};
 });
});*/
/*let brillance;
function a(){
    brillance = document.getElementByClassName("article");
    spoilers.forEach(function a(element){
        if (document.getElementsByClassName("article").onclick){
     element.style.backgroundColor="yellow"}; 
    })  
}*/
    let article1 = document.getElementById("first");
    let article2 = document.getElementById("second");
document.getElementById("first").addEventListener("click", 
function a(){
    article1.style.backgroundColor="yellow"
})
document.getElementById("second").addEventListener("click", 
function a(){
    article2.style.backgroundColor="yellow"
})
