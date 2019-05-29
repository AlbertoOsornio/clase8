const matrizNumeros = [ [1,2,3,4],[5,6,7,8],[9,10,11,12] ]

let totalSuma = 0

for(contador1=0; contador1 < matrizNumeros.length; contador1++){
    for(contador2=0; contador2 < matrizNumeros[contador1].length; contador2++)
    totalSuma = totalSuma + matrizNumeros[contador1][contador2]
}
 console.log("La suma total es: " + totalSuma)