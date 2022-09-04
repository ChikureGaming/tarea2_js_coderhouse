const precioProducto1 = 8;
const precioProducto2 = 6;
const precioProducto3 = 5;
const precioProducto4 = 10;

function orden(){
let p1 = parseInt(prompt("Cuantos sobres de Pokemon TCG quieres"));
let p2 = parseInt(prompt("Cuantos sobres de Yugioh TCG quieres"));
let p3 = parseInt(prompt("Cuantos sobres de Digimon TCG quieres"));
let p4 = parseInt(prompt("Cuantos sobres de Final Fantasy TCG quieres"));

const t1 = precioProducto1 * p1;
const t2 = precioProducto2 * p2;
const t3 = precioProducto3 * p3;
const t4 = precioProducto4 * p4;

const total = t1 + t2 + t3 +t4; 

alert("Tu total sería de $" + total);
} 

/*
    for (let carrito1 = `${precioProducto1} * ${p1}`= total1);
    for (let carrito2 = `${precioProducto2} * ${p2}`= total2);    
    carrito2 = precioProducto2 * p2;
    carrito3 = precioProducto1 * p3;
    carrito4 = precioProducto1 * p4;

    total = carrito1 + carrito2 + carrito3 + carrito4;

    alert("Tu total es de " + total);
    alert("Gracias por tu compra!")
    */