//correr cuando se carga la pagina
window.onload = function() {
  //Crear tema con los colores segun su rango
  CanvasJS.addColorSet("coloresGrafico",
    [
      "#0008E6", //muy bajo
      "#00FFFF", //bajo
      "#7CAD00", //promedio
      "#FEA90D", //alto
      "#fd5f00"  //muy alto
    ]);
  //Crear variable del grafico
  var graficoN = new CanvasJS.Chart("graficoN",//ID del del contenedor
  {
    colorSet: "coloresGrafico",//Definir tema que va a utilizar
    title: { text: "N" }, // Titulo del gráfico
    animationEnabled: true, //Habilitar animaciones
    axisY: {  //Configuración del eje Y.
      maximum: 34, // Maximo de 34,
      interval: 2 // Intervalo de 2.
    },
    axisX: {  //Configuración del eje X.
      interval: 1 // Intervalo de 1 es necesario para el grafico general
    },
    data: [ // array de datos.
      {
        type: "stackedColumn", // tipo columna apilada
        dataPoints:[ // datos para nivel muy bajo.
          { y: 7, label: "N1"},
          { y: 5, label: "N2"},
          { y: 4, label: "N3"},
          { y: 8, label: "N4"},
          { y: 9, label: "N5"},
          { y: 4, label: "N6"}
        ]
      },{
        type: "stackedColumn",
        dataPoints:[ // datos para nivel bajo.
          { y: 5, label: "N1"},
          { y: 4, label: "N2"},
          { y: 5, label: "N3"},
          { y: 4, label: "N4"},
          { y: 4, label: "N5"},
          { y: 4, label: "N6"}
        ]
      },{
        type: "stackedColumn",
        dataPoints:[ // datos para nivel promedio.
          { y: 6, label: "N1"},
          { y: 6, label: "N2"},
          { y: 6, label: "N3"},
          { y: 5, label: "N4"},
          { y: 5, label: "N5"},
          { y: 5, label: "N6"}
        ]
      },{
        type: "stackedColumn",
        dataPoints:[ // datos para nivel alto.
          { y: 5, label: "N1"},
          { y: 5, label: "N2"},
          { y: 6, label: "N3"},
          { y: 4, label: "N4"},
          { y: 5, label: "N5"},
          { y: 4, label: "N6"}
        ]
      },{
        type: "stackedColumn",
        dataPoints:[ // datos para nivel muy alto.
          { y: 9, label: "N1"},
          { y: 12, label: "N2"},
          { y: 11, label: "N3"},
          { y: 11, label: "N4"},
          { y: 9, label: "N5"},
          { y: 15, label: "N6"}
        ]
      },{
        color: "black", // color negro.
        type: "line", //gráfico tipo linea
        dataPoints:[ // datos del paciente.
          { y: 3, label: "N1"},
          { y: 7,  label: "N2"},
          { y: 12,  label: "N3"},
          { y: 19, label: "N4"},
          { y: 28, label: "N5"},
          { y: 32, label: "N6"}
        ]
      }
    ]
  });
  graficoN.render(); // función que pinta el gráfico
}