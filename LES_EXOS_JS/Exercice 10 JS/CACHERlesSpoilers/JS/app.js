
document.getElementById('boutonPourCacher').addEventListener('click', 
function() {
    let spoilers = document.querySelectorAll('.spoiler');
    spoilers.forEach(function(element) {
        if (element.classList.contains("hidden")){
            element.classList.remove("hidden")
        }else{
            element.classList.add("hidden");
        }
    });
   });