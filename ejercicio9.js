let persona ={
    nombre: "Rafa Osornio",
    bonos: [100,500,1300]
}
sumaBonos = 0

for(contador=0; contador<persona.bonos.length; contador++){
    sumaBonos = sumaBonos + persona.bonos[contador]
}
   console.log("suma de bonos: " + sumaBonos)