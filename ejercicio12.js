const stores = [
    {
        name: "Amazon",
        stock: [
            { marca: "Huawei", modelo: "P30", precio: 11999 },
            { marca: "Apple", modelo: "iPhone x", precio: 18000 },
            { marca: "Motorola", modelo: "Moto X", precio: 9000 }
           ]
    },
    {
        name: "Liverpool",
        stock: [
            { marca: "Huawei", modelo: "P30", precio: 13500 },
            { marca: "Apple", modelo: "iPhone x", precio: 20000 },
            { marca: "Motorola", modelo: "Moto X", precio: 10000 }
        ]
    }
]
let indiceMasBaratoTelefono = 0
let indiceMasBaratoTienda = 0
let precioMasBajo = stores[0].stock[0].precio

for(contadorStores = 0; contadorStores<stores.length; contadorStores++){
    for(contadorTelefonos = 0; contadorTelefonos<stores[contadorStores].stock.length; contadorTelefonos++){
        if(stores[contadorStores].stock[contadorTelefonos].precio<=precioMasBajo){
            precioMasBajo = stores[contadorStores].stock[contadorTelefonos].precio
            indiceMasBaratoTelefono = contadorTelefonos
            indiceMasBaratoTienda = contadorStores    
        }
    }
}
console.log("tienda mas barata: " + stores[indiceMasBaratoTienda].name + ", telefono mas barato: " + stores[indiceMasBaratoTienda].stock[indiceMasBaratoTelefono].modelo)
