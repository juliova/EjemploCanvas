window.onload = function() {
    CanvasJS.addColorSet("coloresGrafico",
        [
            "#0008E6", //muy bajo
            "#00FFFF", //bajo
            "#7CAD00", //promedio
            "#FEA90D", //alto
            "#fd5f00"  //muy alto
        ]);
    var graficoN = new CanvasJS.Chart("graficoN",
    {
      colorSet: "coloresGrafico",
      title: { text: "N" },
      animationEnabled: true,
      axisY: {
        maximum: 34,
        interval: 2
       },
       axisX: {
        interval: 1
       },
      data: [
        {
          type: "stackedColumn",
          dataPoints:[
            { y: 7, label: "N1"},
            { y: 5, label: "N2"},
            { y: 4, label: "N3"},
            { y: 8, label: "N4"},
            { y: 9, label: "N5"},
            { y: 4, label: "N6"}
          ]
        },{
          type: "stackedColumn",
          dataPoints:[
            { y: 5, label: "N1"},
            { y: 4, label: "N2"},
            { y: 5, label: "N3"},
            { y: 4, label: "N4"},
            { y: 4, label: "N5"},
            { y: 4, label: "N6"}
          ]
        },{
          type: "stackedColumn",
          dataPoints:[
            { y: 6, label: "N1"},
            { y: 6, label: "N2"},
            { y: 6, label: "N3"},
            { y: 5, label: "N4"},
            { y: 5, label: "N5"},
            { y: 5, label: "N6"}
          ]
        },{
          type: "stackedColumn",
          dataPoints:[
            { y: 5, label: "N1"},
            { y: 5, label: "N2"},
            { y: 6, label: "N3"},
            { y: 4, label: "N4"},
            { y: 5, label: "N5"},
            { y: 4, label: "N6"}
          ]
        },{
          type: "stackedColumn",
          dataPoints:[
            { y: 9, label: "N1"},
            { y: 12, label: "N2"},
            { y: 11, label: "N3"},
            { y: 11, label: "N4"},
            { y: 9, label: "N5"},
            { y: 15, label: "N6"}
          ]
        },{
          color: "black",
          type: "line",
          dataPoints:[
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
    graficoN.render();
}