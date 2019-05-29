const persona = {
    nombre: "Rafa Osornio",
    tarjetas: [
                {          
                    credito: 19000 
                },
                {
                    credito: 50000
                }
    ]
}
let creditoTotal = 0

for(contador = 0; contador<persona.tarjetas.length; contador++){
    creditoTotal = creditoTotal + persona.tarjetas[contador].credito
}
console.log("credito total: " + creditoTotal)