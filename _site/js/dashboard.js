function dashboard(){


		function highchartsA(){

			// Make monochrome colors and set them as default for all pies
		    Highcharts.getOptions().plotOptions.pie.colors = (function () {
		        var colors = [],
		            base = Highcharts.getOptions().colors[0],
		            i;

		        for (i = 0; i < 10; i += 1) {
		            // Start out with a darkened base color (negative brighten), and end
		            // up with a much brighter color
		            colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
		        }
		        return colors;
		    }());

		    // Build the chart
		    $('#containerA').highcharts({
		        chart: {
		            plotBackgroundColor: null,
		            plotBorderWidth: null,
		            plotShadow: false,
		            type: 'pie'
		        },
		        title: {
		            text: ''
		        },
		        tooltip: {
		            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		        },
		        plotOptions: {
		            pie: {
		                allowPointSelect: true,
		                cursor: 'pointer',
		                dataLabels: {
		                    enabled: true,
		                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
		                    style: {
		                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
		                    }
		                }
		            }
		        },
		        series: [{
		            name: 'Consumption',
		            data: [
		                { name: 'Phone Calls', y: 36 },
		                { name: 'Data', y: 50 },
		                { name: 'Messaging', y: 14 }
		                
		            ]
		        }]
		    });
		};

		function numberLastPeriod(){

			// Make monochrome colors and set them as default for all pies
		    Highcharts.getOptions().plotOptions.pie.colors = (function () {
		        var colors = [],
		            base = Highcharts.getOptions().colors[9],
		            i;

		        for (i = 0; i < 10; i += 1) {
		            // Start out with a darkened base color (negative brighten), and end
		            // up with a much brighter color
		            colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
		        }
		        return colors;
		    }());

		    // Build the chart
		    $('#numberLastPeriod').highcharts({
		        chart: {
		            plotBackgroundColor: null,
		            plotBorderWidth: null,
		            plotShadow: false,
		            type: 'pie'
		        },
		        title: {
		            text: ''
		        },
		        tooltip: {
		            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		        },
		        plotOptions: {
		            pie: {
		                allowPointSelect: true,
		                cursor: 'pointer',
		                dataLabels: {
		                    enabled: true,
		                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
		                    style: {
		                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
		                    }
		                }
		            }
		        },
		        series: [{
		            name: 'Consumption',
		            data: [
		                { name: 'Phone Calls', y: 471 },
		                { name: 'Data', y: 544 },
		                { name: 'Messaging', y: 19 }
		                
		            ]
		        }]
		    });
		};

		function costCenterConsumption(){

			// Make monochrome colors and set them as default for all pies
		    Highcharts.getOptions().plotOptions.pie.colors = (function () {
		        var colors = [],
		            base = Highcharts.getOptions().colors[0],
		            i;

		        for (i = 0; i < 10; i += 1) {
		            // Start out with a darkened base color (negative brighten), and end
		            // up with a much brighter color
		            colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
		        }
		        return colors;
		    }());

		    // Build the chart
		    $('#costCenterConsumption').highcharts({
		        chart: {
		            plotBackgroundColor: null,
		            plotBorderWidth: null,
		            plotShadow: false,
		            type: 'pie'
		        },
		        title: {
		            text: ''
		        },
		        tooltip: {
		            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		        },
		        plotOptions: {
		            pie: {
		                allowPointSelect: true,
		                cursor: 'pointer',
		                dataLabels: {
		                    enabled: true,
		                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
		                    style: {
		                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
		                    }
		                }
		            }
		        },
		        series: [{
		            name: 'Consumption',
		            data: [
		                { name: 'Phone Calls', y: 7000 },
		                { name: 'Data', y: 4500 },
		                { name: 'Messaging', y: 500 }
		                
		            ]
		        }]
		    });
		};

		function costCenterLastPeriod(){
			
			// Make monochrome colors and set them as default for all pies
		    Highcharts.getOptions().plotOptions.pie.colors = (function () {
		        var colors = ["#7cb5ec", "#f7a35c", "#90ee7e", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee", "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"];
		        return colors
		    }());

			 $('#ownership').highcharts({
		        chart: {
		            type: 'pie'
		        },
		        title: {
		            text: 'Cotação: Etapas'
		        },
		        subtitle: {
		            text: 'Clique para inspecionar Tipos de Cotação'
		        },
		        plotOptions: {
		            series: {
		                dataLabels: {
		                    enabled: false,
		                    format: '{point.name}: {point.y}'
		                }
		            }
		        },

		        tooltip: {
		            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
		            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> de 154<br/>'
		        },
		        series: [{
		            name: 'Etapas',
		            colorByPoint: true,
		            data: [{
		                name: 'Criação',
		                y: 56,
		                drilldown: 'criacao'
		            }, {
		                name: 'Aprovação',
		                y: 24,
		                drilldown: 'criacao'
		            }, {
		                name: 'Consultor',
		                y: 10,
		                drilldown: 'criacao'
		            }, {
		                name: 'Formulação',
		                y: 47,
		                drilldown: 'criacao'
		            }, {
		                name: 'Implantação',
		                y: 10,
		                drilldown: 'criacao'
		            }, {
		                name: 'Formulação Implantação',
		                y: 2,
		                drilldown: 'criacao'
		            }, {
		                name: 'Regulatórios',
		                y: 1,
		                drilldown: 'criacao'
		            }, {
		                name: 'Finalização',
		                y: 2,
		                drilldown: 'criacao'
		            }, {
		                name: 'Implantação Final',
		                y: 2,
		                drilldown: 'criacao'
		            }]
		        }],
		        drilldown: {
		            series: [{
		                name: 'Criação',
		                id: 'criacao',
		                data: [
		                    ['Novo', 24],
		                    ['Reenvio', 17],
		                    ['Alteração', 8],
		                ]
		            }]
		        }
		    });
		}

		function costCenterSixMonth(){
			 $('#prazoMedio').highcharts({
		        title: {
		            text: 'Cotação: Prazo X Modelo Negócio',
		            x: -20 //center
		        },
		        xAxis: {
		            categories: ['Mai','Jun','Jul','Ago','Set','Out']
		        },
		        yAxis: {
		            title: {
		                text: 'Dias'
		            },
		            plotLines: [{
		                value: 0,
		                width: 1,
		                color: '#808080'
		            }]
		        },
		        tooltip: {
		            valueSuffix: ''
		        },
		        legend: {
		            layout: 'horizontal',
		            align: 'center',
		            backgroundColor: '#FFF',
		            margin: 20,
		            padding: 10,
		            borderWidth: 0,
		            borderRadius: 3,
		            shadow: [{
		            	opacity: .9,
		            }]
		        },
		        series: [{
		            name: 'Minhas Cotações',
		            data: [30, 34, 28, 22, 19, 22]
		        },{
		            name: 'Terceirização',
		            data: [20, 22, 18, 17, 15, 18]
		        }, {
		            name: 'Distr. Exclusiva',
		            data: [21, 29, 24, 25, 20, 28]
		        }, {
		            name: 'Exportação',
		            data: [44, 48, 40, 36, 33, 30]
		        }, {
		            name: 'NDA',
		            data: [18, 20, 16, 15, 13, 16]
		        }]
		    });
		}

		function numberSixMonth(){
			 $('#numberSixMonth').highcharts({
		        title: {
		            text: 'Monthly Consumption',
		            x: -20 //center
		        },
		        xAxis: {
		            categories: ['Dec-15','Jan-16','Feb-16','Mar-16','Apr-16','May-16']
		        },
		        yAxis: {
		            title: {
		                text: 'Consumption in R$'
		            },
		            plotLines: [{
		                value: 0,
		                width: 1,
		                color: '#808080'
		            }]
		        },
		        tooltip: {
		            valueSuffix: ''
		        },
		        legend: {
		            layout: 'vertical',
		            align: 'right',
		            verticalAlign: 'middle',
		            borderWidth: 0
		        },
		        series: [{
		            name: 'Total',
		            data: [1420, 1295, 875, 1712, 499, 1529]
		        }, {
		            name: 'Phone Calls',
		            data: [650, 504, 877, 712, 6590, 410]
		        }, {
		            name: 'Messaging',
		            data: [19, 49, 79, 29, 49, 49]
		        }, {
		            name: 'Data',
		            data: [650, 960, 925, 9701, 410, 760]
		        }]
		    });
		}

		function highchartsB(){

			// Make monochrome colors and set them as default for all pies
		    Highcharts.getOptions().plotOptions.pie.colors = (function () {
		        var colors = [],
		            base = Highcharts.getOptions().colors[9],
		            i;

		        for (i = 0; i < 10; i += 1) {
		            // Start out with a darkened base color (negative brighten), and end
		            // up with a much brighter color
		            colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
		        }
		        return colors;
		    }());

		    // Build the chart
		    $('#containerB').highcharts({
		        chart: {
		            plotBackgroundColor: null,
		            plotBorderWidth: null,
		            plotShadow: false,
		            type: 'pie'
		        },
		        title: {
		            text: ''
		        },
		        tooltip: {
		            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		        },
		        plotOptions: {
		            pie: {
		                allowPointSelect: true,
		                cursor: 'pointer',
		                dataLabels: {
		                    enabled: true,
		                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
		                    style: {
		                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
		                    }
		                }
		            }
		        },
		        series: [{
		            name: 'Invoices',
		            data: [
		                { name: 'PAID', y: 6.1 },
		                { name: 'PENDING', y: 3.9 }
		            ]
		        }]
		    });
		};

		function highchartsC(){

			// Make monochrome colors and set them as default for all pies
		    Highcharts.getOptions().plotOptions.pie.colors = (function () {
		        var colors = [],
		            base = Highcharts.getOptions().colors[8],
		            i;

		        for (i = 0; i < 10; i += 1) {
		            // Start out with a darkened base color (negative brighten), and end
		            // up with a much brighter color
		            colors.push(Highcharts.Color(base).brighten((i - 3) / 7).get());
		        }
		        return colors;
		    }());

		    // Build the chart
		    $('#containerC').highcharts({
		        chart: {
		            plotBackgroundColor: null,
		            plotBorderWidth: null,
		            plotShadow: false,
		            type: 'pie'
		        },
		        title: {
		            text: ''
		        },
		        tooltip: {
		            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		        },
		        plotOptions: {
		            pie: {
		                allowPointSelect: true,
		                cursor: 'pointer',
		                dataLabels: {
		                    enabled: true,
		                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
		                    style: {
		                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
		                    }
		                }
		            }
		        },
		        series: [{
		            name: 'Numbers',
		            data: [
		                { name: 'ASSOCIATED', y: 7.91 },
		                { name: 'AVAILABLE', y: 2.09 }
		            ]
		        }]
		    });
		};

		function drilldownA(){
			  $('#drilldownA').highcharts({
		        chart: {
		            type: 'column'
		        },
		        title: {
		            text: 'Invoices X Cost Center'
		        },
		        subtitle: {
		            text: 'Click on a Cost Center to view Consumption'
		        },
		        xAxis: {
		            type: 'category'
		        },
		        yAxis: {
		            title: {
		                text: 'Invoices in R$'
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
		                    format: '{point.y}',
		                    formatter:function() {
			                    var pcnt = (this.y / dataSum) * 100;
			                    return Highcharts.numberFormat(pcnt) + '%';
			                }
		                }
		            }
		        },

		        tooltip: {
		            headerFormat: '',
		            pointFormat: '<span style="color:{point.color}">{point.name}</span><br />R$ {point.y:2f} - % of total<br/>'
		        },

		        series: [{
		            name: 'Cost Centers',
		            colorByPoint: true,
		            data: [{
		                name: 'ADM-RH',
		                y: 12000,
		                drilldown : 'ADM-RH'
		            }, {
		                name: 'TI-BI',
		                y: 10000,
		                drilldown : 'TI-BI'
		            }, {
		                name: 'FINAN',
		                y: 8000,
		                drilldown : 'FINAN'
		            }, {
		                name: 'LEGAL',
		                y: 6500
		            }, {
		                name: 'SYS-ASP',
		                y: 4500
		            }, {
		                name: 'SYS-CC',
		                y: 3900
		            }, {
		                name: 'SYS-COM1',
		                y: 3690
		            }, {
		                name: 'SYS-COM2',
		                y: 3500
		            }, {
		                name: 'SYS-COM3',
		                y: 3333
		            }, {
		                name: 'SYS-DOA',
		                y: 3147
		            }, {
		                name: 'SYS-ESHOP',
		                y: 2910
		            }, {
		                name: 'SYS-LOG',
		                y: 2727
		            }, {
		                name: 'SYS-MKT',
		                y: 2544
		            }, {
		                name: 'OP-MKT',
		                y: 2290
		            }, {
		                name: 'SYS-PLAN',
		                y: 2106
		            }, {
		                name: 'SYS-PM',
		                y: 1990
		            }, {
		                name: 'OP-PM',
		                y: 1708
		            }, {
		                name: 'OP-SALES',
		                y: 1515
		            }, {
		                name: 'OP-SERV',
		                y: 1280
		            }, {
		                name: 'SYS-SUPLI',
		                y: 1114
		            }, {
		                name: 'OP-SUPPLY',
		                y: 940
		            }, {
		                name: 'SYS-TRADE',
		                y: 650
		            }]
		        }],
		        drilldown: {
		            series: [{
		                name: 'ADM-RH',
		                id: 'ADM-RH',
		                data: [
		                    [
		                        'Data',
		                        7000
		                    ],
		                    [
		                        'Phone Calls',
		                        4500
		                    ],
		                    [
		                        'Messaging',
		                        500
		                    ],
		                ]
		            }, {
		                name: 'TI-BI',
		                id: 'TI-BI',
		                data: [
		                    [
		                        'Data',
		                        6000
		                    ],
		                    [
		                        'Phone Calls',
		                        3800
		                    ],
		                    [
		                        'Messaging',
		                        200
		                    ],
		                ]
		            }, {
		                name: 'FINAN',
		                id: 'FINAN',
		                data: [
		                    [
		                        'Data',
		                        3000
		                    ],
		                    [
		                        'Phone Calls',
		                        4200
		                    ],
		                    [
		                        'Messaging',
		                        800
		                    ],
		                ]
		            }]
		        }
		    });
		};

		function drilldownB(){
			  $('#drilldownB').highcharts({
		        chart: {
		            type: 'column'
		        },
		        title: {
		            text: 'Monthly Consumption'
		        },
		        xAxis: {
		            categories: ['Dec-15', 'Jan-16', 'Feb-16', 'Mar-16', 'Apr-16', 'May-16']
		        },
		        yAxis: {
		            min: 0,
		            title: {
		                text: 'Consumption in R$'
		            },
		            stackLabels: {
		                enabled: true,
		                style: {
		                    fontWeight: 'bold',
		                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
		                }
		            }
		        },
		        legend: {
		            align: 'right',
		            x: -30,
		            verticalAlign: 'top',
		            y: 25,
		            floating: true,
		            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
		            borderColor: '#CCC',
		            borderWidth: 1,
		            shadow: false
		        },
		        tooltip: {
		            headerFormat: '<b>{point.x}</b><br/>',
		            pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
		        },
		        plotOptions: {
		            column: {
		                stacking: 'normal',
		                dataLabels: {
		                    enabled: true,
		                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
		                    style: {
		                        textShadow: '0 0 3px black'
		                    }
		                }
		            }
		        },
		        series: [{
		            name: 'Phone Calls',
		            data: [6500, 5500, 7123, 7040, 6540, 5432]
		        }, {
		            name: 'Messaging',
		            data: [800, 400, 1123, 699, 540, 430]
		        }, {
		            name: 'Data',
		            data: [14000, 12500, 16425, 14555, 16009, 17666]
		        }]
		    });
		};


		drilldownB();
		drilldownA();
		highchartsA();
		highchartsB();
		highchartsC();
		costCenterConsumption();
		
		costCenterSixMonth();
		numberLastPeriod();

		numberSixMonth();
		costCenterLastPeriod();

		

	};