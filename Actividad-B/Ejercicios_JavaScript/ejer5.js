//arreglos
const ciudades= ["Cali","Medillin","Neiva"];
const personas=[];
personas[0]="pedro";
personas[1]="Maria";
const carros = new Array("Mazda","Toyota","Renult");
for (let index = 0; index < ciudades.length; index++) {
    console.log(ciudades[index]);
}
console.log(ciudades)

const edades =[157,248,78,3,976,300];
//let ordenado = edades.sort();
console.log(edades.sort(function(a,b){return a-b}));
console.log(edades.sort(function(a,b){return b-a}));
console.log(ciudades.toString())
console.log(ciudades.join(" - "))

const frutas = ["Banana","Naranja","Manzana","Mango"];
frutas.pop();//elimina el ultimo elemento
console.log(frutas.toString())
frutas.push("Limon");
console.log(frutas.toString())
frutas.shift()
console.log(frutas.toString())
frutas.unshift("Banano");
console.log(frutas.toString())
