let alumno = {
        nombre: "Rafa Osornio",
        calificaciones: [7,10,9,6]
    }
let numMasGrande = 0

    for(contador=0; contador<alumno.calificaciones.length; contador++){
        if(numMasGrande<alumno.calificaciones[contador]){
            numMasGrande = alumno.calificaciones[contador]
        }
    }
    console.log("calificacion mas alta: " + numMasGrande)
