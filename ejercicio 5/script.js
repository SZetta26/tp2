function calcularArea(){
    const a=Number(document.getElementById("ladoA").value)
    const b=Number(document.getElementById("ladoB").value)
    const c=Number(document.getElementById("ladoC").value)
    const a2=a-c
    const areaRectangulo=b*c
    const areaTriangulo=(b*a2)/2
    const areaTotal=areaRectangulo+areaTriangulo

    const resultado = document.getElementById("cuadroTexto");
    resultado.value = areaTotal +" m²"

    
}