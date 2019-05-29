const temperaturas = [19,24,25,30,10]
let numMasGrande = 0

   for(contador=0; contador<temperaturas.length; contador++){
        if(numMasGrande<temperaturas[contador]){
            numMasGrande = temperaturas[contador]
        }
    }
   console.log("numero mas grande: " + numMasGrande)