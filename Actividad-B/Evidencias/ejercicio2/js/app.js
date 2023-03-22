const estudiantes =[];
/**
 * Agrega un estudiante al arreglo de estudiantes
 */
function registrar(){
 let identificacion = document.getElementById("txtIdentificacion").value;
 let nombre = document.getElementById("txtNombre").value;
 let correo = document.getElementById("txtCorreo").value;
 let curso = document.getElementById("cbCurso").value;
if(identificacion!=" " && nombre!=" " && correo!=" " && curso!="0"){
   if(!existeId(identificacion)){
      if(!existeCorreo(correo)){
         const estudiante = {
            "identificacion": identificacion,
            "nombre": nombre,
            "correo": correo,
            "curso": curso
         };
         estudiantes.push(estudiante);
         mostrar();
         limpiar();
      }else{
         alert("Ya existe una persona con este correo...")
      }
    }else{
      alert("Ya existe una persona con esa identificacion...")
    }
}else{
   alert("Llenar todos los campos...")
}
}
function mostrar(){
   let datos="";
   estudiantes.forEach(estudiante => {
         datos += "<tr><td>"+ estudiante.identificacion +"</td>";
         datos += "<td>"+ estudiante.nombre +"</td>";
         datos += "<td>"+ estudiante.correo +"</td>";
         datos += "<td>"+ estudiante.curso + "</td></tr>";
   });
   document.getElementById("filas").innerHTML = datos;
}
function existeId(identificacion){
   let existe = false;
   estudiantes.forEach(estudiante => {
      if(estudiante.identificacion==identificacion){
         existe=true;
      }
});
return existe;
}
function existeCorreo(correo){
   let existe = false;
   estudiantes.forEach(estudiante => {
      if(estudiante.correo==correo){
         existe=true;
      }
});
return existe;
}
function limpiar(){
 document.getElementById("txtIdentificacion").value="";
 document.getElementById("txtNombre").value="";
 document.getElementById("txtCorreo").value="";
 document.getElementById("cbCurso").value="0";
}

