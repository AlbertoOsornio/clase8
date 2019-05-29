const alumnos = [
            {
                nombre: "rafa",
                materias: [
                        {
                            nombre: "Matematicas",
                            calificacion: 80
                        },
                        {
                            nombre: "Historia",
                            calificacion: 50
                        },
                        {
                            nombre: "Civismo",
                            calificacion: 90
                        }
                ]
            },
            {
                nombre: "karla",
                materias: [
                        {
                            nombre: "Matematicas",
                            calificacion: 100
                        },
                        {
                            nombre: "Historia",
                            calificacion: 90
                        },
                        {
                            nombre: "Civismo",
                            calificacion: 80
                        }
                ]
            },
            {
               nombre: "morita",
                materias: [
                        {
                            nombre: "Matematicas",
                            calificacion: 100
                        },
                        {
                            nombre: "Historia",
                            calificacion: 100
                        },
                        {
                            nombre: "Civismo",
                            calificacion: 100
                        }
                ] 
            }
            ]
           
  
    indiceMejorPromedio = 0
    sumaCalificaciones1 = 0
    sumaCalificaciones = 0
    mejorPromedio =0
    promedio = 0
    promedio1 = 0
    
            
    for(contadorAlumnos = 0; contadorAlumnos<alumnos.length; contadorAlumnos++){
        for(contadorMaterias = 0; contadorMaterias<alumnos[contadorAlumnos].materias.length; contadorMaterias ++){
            sumaCalificaciones = sumaCalificaciones + alumnos[contadorAlumnos].materias[contadorMaterias].calificacion
        }
        //console.log("sumaCalificaciones: " + alumnos[contadorAlumnos].nombre + ": " + sumaCalificaciones)
        promedio = sumaCalificaciones/alumnos[contadorAlumnos].materias.length
        if(promedio>mejorPromedio){
            mejorPromedio = promedio
            indiceMejorPromedio = contadorAlumnos 
        }   
            sumaCalificaciones = 0
        }
    console.log("El mejor promedio es de " + mejorPromedio + " corresponde a: " + alumnos[indiceMejorPromedio].nombre)
