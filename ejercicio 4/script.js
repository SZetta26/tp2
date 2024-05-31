function calcularImc(){
    const peso=Number(document.getElementById("peso").value)
    const altura=Number(document.getElementById("estatura").value)
    const imc=(peso/(altura**2)).toFixed(2)
        alert("Su indice de masa corporal es de: " + imc)
}