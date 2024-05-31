document.getElementById("boton").onclick = validacion;

function validacion(){
    if(!document.getElementById("formulario").checkValidity()){
        document.getElementById("val").style="visibility:visible;color:red;"
        document.getElementById("val").innerHTML = "Formulario no valido!";
    }else{
        document.getElementById("val").style="visibility:visible;color:green;"
        document.getElementById("val").innerHTML = "Formulario valido!";
    }
}