let envelope = document.getElementById('envelope')
let modal = document.getElementById('emailModal');

envelope.onclick = function(){
    modal.style.display = "block"
}

window.onclick = function(e){
    if(e.target == modal){
    modal.style.display = "none"
    }
}





