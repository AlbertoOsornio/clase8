let persona = {
        nombreCompleto: "Rafa Osornio",
        partidas: [true,false,true,true]
        }
    console.log("partidas ganadas de: " + persona.nombreCompleto)
    for(contador=0; contador<persona.partidas.length; contador++){
        if(persona.partidas[contador]) {
            console.log(contador+1)
        }
    }
        