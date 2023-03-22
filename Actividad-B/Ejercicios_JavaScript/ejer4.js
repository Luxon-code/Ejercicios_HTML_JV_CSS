//uso del if
let edad = 19;
if (edad >= 18) {
    console.log("Mayor de edad");
} else {
    console.log("No mayor del edad");
}
let dia = 3;
switch (dia) {
    case 1:
        console.log("Lunes")
        break;
    case 2:
        console.log("Martes")
        break;
    case 3:
        console.log("Miercoles")
        break;
    case 4:
        console.log("Jueves")
        break;
    case 5:
        console.log("Viernes")
        break;
    case 6:
        console.log("Sabado")
        break;
    case 7:
        console.log("Domingo")
        break;
    default:
        console.log("Fuera de rango");
        break;
}
// uso del for

for(i=0;i<10;i++){
    console.log(i)
}
//uso de while
i=0;
while (i<10) {
    console.log(i);
    i++;
}
//uso de do while
i=0;
do{
    console.log(i);
    i++;
}while(i<10);
