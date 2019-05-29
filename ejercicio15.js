const estadoResultados = 
            {
                nombre: "rafa",
                gastos: [
                        {
                            nombre: "Comida",
                            monto: 80
                        },
                        {
                            nombre: "Auto",
                            monto: 50
                        },
                        {
                            nombre: "Salud",
                            monto: 90
                        },
                        {
                            nombre: "Salud",
                            monto: 10
                        }
                ],
                ingresos: [
                            {
                                nombre:"Trabajo",
                                monto: 200
                            },
                            {
                                nombre:"Curso",
                                monto: 500
                            }
                ]
            }
        
    let iva = 16
    let sumaIngresosBrutos = 0
    let ingresosNetos = 0
    let sumaGastos = 0
    let impuestosAPagar = 0
    
    for(contadorIngresos = 0; contadorIngresos<estadoResultados.ingresos.length; contadorIngresos++){
        sumaIngresosBrutos = sumaIngresosBrutos + estadoResultados.ingresos[contadorIngresos].monto
    }
    ingresosNetos = sumaIngresosBrutos - ((sumaIngresosBrutos *  iva) /100)
    
    for(contadorGastos = 0; contadorGastos<estadoResultados.gastos.length; contadorGastos++){
        if(estadoResultados.gastos[contadorGastos].nombre === "Salud"){
            sumaGastos = sumaGastos + estadoResultados.gastos[contadorGastos].monto
        }
    }

    impuestosAPagar = ingresosNetos - sumaGastos

   console.log("impuestos a pagar: " + impuestosAPagar)

