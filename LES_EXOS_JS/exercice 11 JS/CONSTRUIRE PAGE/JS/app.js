document.body.onload = addElement;
function addElement (){
    const laCase = document.createElement("input"); // create a new input element
    const deRose = document.createElement("button"); // create the button 
    deRose.textContent="vider l'input";  // set its value
    deRose.onclick= function(){
    laCase.value="";
}
    document.body.appendChild(laCase); // Add the input to the body of the HTML document
    document.body.appendChild(deRose);// Add the button to the body of the HTML document
}