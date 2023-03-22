function irCuadrado(){
    document.getElementById("cua").style.display="block";
    document.getElementById("tri").style.display="none";
    document.getElementById("cir").style.display="none";
    limpiar();
}
function irTriangulo(){
    document.getElementById("tri").style.display="block";
    document.getElementById("cua").style.display="none";
    document.getElementById("cir").style.display="none";
    limpiar();

}
function irCirculo(){
    document.getElementById("cua").style.display="none";
    document.getElementById("tri").style.display="none";
    document.getElementById("cir").style.display="block";
    limpiar();
}
function areaCuadrado(){
    let lado = parseInt(document.getElementById("txtLado").value);
    if (!isNaN(lado)) {
        let total = lado * lado;
        document.getElementById("txtTotal1").value = total;   
    } else {
        alert("Llenar todos los campos..");
    }
}

function areaTriangulo(){
    let base = parseInt(document.getElementById("txtBase").value);
    let altura = parseInt(document.getElementById("txtAltura").value);
    if(!isNaN(base) && !isNaN(altura)){
        let total = (base*altura)/2;
        document.getElementById("txtTotal2").value = total;   
    }else{
        alert("Llenar todos los campos..");
    }
}
function areaCirculo(){
    let radio = parseInt(document.getElementById("txtRadio").value);
    if (!isNaN(radio)) {
        let total = Math.PI * Math.pow(radio,2);
        document.getElementById("txtTotal3").value = total;   
    } else {
        alert("Llenar todos los campos..");
    }
}
function limpiar(){
    document.getElementById("txtBase").value="";
    document.getElementById("txtAltura").value="";
    document.getElementById("txtLado").value="";
    document.getElementById("txtRadio").value="";
    document.getElementById("txtTotal1").value="";
    document.getElementById("txtTotal2").value="";
    document.getElementById("txtTotal3").value="";
}