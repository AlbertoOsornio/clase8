const stock = [
    { marca: "Huawei", modelo: "P30", precio: 13500 },
    { marca: "Apple", modelo: "iPhone x", precio: 20000},
    { marca: "Motorola", modelo: "Moto X", precio: 10000 }
]
precioMasBarato = stock[0].precio
indiceMasBarato = 0

for(contador = 0; contador<stock.length; contador++)
    if(stock[contador].precio<=precioMasBarato){
        precioMasBarato = stock[contador].precio
        indiceMasBarato = contador
    }
console.log("telefono mas barato es: " + stock[indiceMasBarato].marca + " " + stock[indiceMasBarato].modelo)
