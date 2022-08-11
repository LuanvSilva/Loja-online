function exibir(categoria) {
    let elementos = document.getElementsByClassName('boxprod');
console.log(elementos);
for (var i = 0; i< elementos.length; i++){
    console.log(elementos[i].id)
    if(categoria == elementos[i].id)
    elementos[i].style = "display:block";
    else
    elementos[i].style = "display:none"; 
}
}
function exibirtodas() {
    let elementos = document.getElementsByClassName('boxprod');

for (var i = 0; i< elementos.length; i++){
    
    elementos[i].style = "display:block";
}
};
function treta(imagen){
    console.log(imagen);
    if(imagen.width == 240)
    imagen.width = 120;
    else
    imagen.width = 240;
}