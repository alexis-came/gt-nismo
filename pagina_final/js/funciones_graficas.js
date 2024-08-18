
Highcharts.chart('container', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'AUTOS VENDIDOS'
    },
    tooltip: {
        valueSuffix: '%'
    },
    subtitle: {
        text:
        ''
    },
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: true,
                distance: 20
            }, {
                enabled: true,
                distance: -40,
                format: '{point.percentage:.1f}%',
                style: {
                    fontSize: '1.2em',
                    textOutline: 'none',
                    opacity: 0.7
                },
                filter: {
                    operator: '>',
                    property: 'porcentaje',
                    value: 10
                }
            }]
        }
    },
    series: [
        {
            name: 'Porcentaje',
            colorByPoint: true,
            data: [
                {
                    name: 'Nismo gtr_r33',
                    y: 11.71
                },
                {
                    name: 'Datsun 1980',
                   
                    y: 30.80
                },
                {
                    name: 'Nissan GTR-R35',
                    y: 35.78
                },
                {
                    name: 'Nismo GTR-R35',
                     sliced: true,
                    selected: true,
                    y: 15.09
                },
                {
                    name: '240Z',
                    y: 6.68
                }
            ]
        }
    ]
});
/*************************************************GRAFICA 2*****************************************************************************************/

// Data retrieved from https://gs.statcounter.com/browser-market-share#monthly-202201-202201-bar

// Create the chart
Highcharts.chart('container2', {
    chart: {
        type: 'column'
    },
    title: {
        align: 'left',
        text: 'Visita de clientes por semana'
    },
    subtitle: {
        align: 'left',
        text: ''
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Visitas semanales'
        }

    },
    legend: {
        enabled: false
    },
    plotOptions: {
        series: {
            borderWidth: 0,
            dataLabels: {
                enabled: true,
                format: '{point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: ' +
            '<b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [
        {
            name: 'Visitas Clientes',
            colorByPoint: true,
            data: [
                {
                    name: 'Lunes',
                    y: 2.30,
                    drilldown: null
                },
                {
                    name: 'Martes',
                    y: 40.84,
                    drilldown: null
                },
                {
                    name: 'Miercoles',
                    y: 50.18,
                    drilldown: null
                },
                {
                    name: 'Jueves',
                    y: 78.52,
                    drilldown: null
                },
                {
                    name: 'Viernes',
                    y: 92.33,
                    drilldown: null
                },
                {
                    name: 'Sabado',
                    y: 100.45,
                    drilldown: null
                },
                {
                    name: 'Domingo',
                    y: 95.582,
                    drilldown: null
                }
            ]
        }
    ]
    
});