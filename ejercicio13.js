const alumnos = [
    {
        nombre: "rafa",
        edad: 29
    },
    {
        nombre: "karla",
        edad: 30
    },
    {
        nombre: "pedro",
        edad: 5
    }
]
alumnoMasGrande = 0
nombreAlumnoMasGrande = ""

for(contador = 0; contador<alumnos.length; contador++){
    if(alumnos[contador].edad>alumnoMasGrande){
        alumnoMasGrande = alumnos[contador].edad
        nombreAlumnoMasGrande = alumnos[contador].nombre
    }
}
console.log("alumno mas grande " + nombreAlumnoMasGrande)