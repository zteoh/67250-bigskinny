$(document).ready(function(){
    $('#shadyside-graph').highcharts( {
        title: {
            text: 'Popular times for Shadyside'
        },
        subtitle: {
            text: 'Average per Day'
        },
        xAxis: {
            title: {
                text: 'Time'
            },
            categories: ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm']
        },
        yAxis: {
            title: {
                text: 'Number of People'
            }
        },
        tooltip: {
            valueSuffic: ' people per hour (on average)'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        series: [{
            data: [10, 8, 24, 5, 7, 32, 16, 18, 27, 39, 32]
        }]
    });

    $('#downtown-graph').highcharts( {
        title: {
            text: 'Popular times for Downtown'
        },
        subtitle: {
            text: 'Average per Day'
        },
        xAxis: {
            title: {
                text: 'Time'
            },
            categories: ['7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm']
        },
        yAxis: {
            title: {
                text: 'Number of People'
            }
        },
        tooltip: {
            valueSuffic: ' people per hour (on average)'
        },
        legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
        },

        series: [{
            data: [24, 12, 16, 8, 11, 19, 15, 18, 13, 21, 35]
        }]
    });

    $('#sales-pie-chart').highcharts( {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Sales Revenue in 2018'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: false
                },
                showInLegend: true
            }
        },
        series: [{
            name: 'Revenue',
            colorByPoint: true,
            data: [{
                name: 'Tortes',
                y: 61.41,
                sliced: true,
                selected: true
            }, {
                name: 'Cakes',
                y: 11.84
            }, {
                name: 'Cookies',
                y: 10.85
            }, {
                name: 'Brownies',
                y: 4.67
            }, {
                name: 'Pies',
                y: 4.18
            }, {
                name: 'Other',
                y: 7.05
            }]
        }]
    });


    $('#sales-bar-chart').highcharts( {

        chart: {
            type: 'spline'
        },

        title: {
            text: 'Sale Revenue in Thousands in 2018'
        },

        subtitle: {
            text: 'toggle legend to show/hide bar'
        },
        plotOptions: {
            spline: {
                lineWidth: 2,
                states: {
                    hover: {
                        lineWidth: 3
                    }
                },
                marker: {
                    enabled: false
                }
            }
        },

        legend: {
            align: 'right',
            verticalAlign: 'middle',
            layout: 'vertical'
        },

        xAxis: {
            categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'Sepetember', 'October', 'November', 'December'],
            labels: {
                x: -10
            }
        },

        yAxis: {
            allowDecimals: false,
            title: {
                text: 'Amount'
            }
        },

        series: [{
            name: 'Shadyside Branch',
            data: [9,12,12,13,17,24,7,9,19,9,7,6]
        }, {
            name: 'Downtown Branch',
            data: [5,7,19,13,12,10,5,9,8,15,7,15]
        }, {
            name: 'Greensburg Branch',
            data: [4,9,5,2,7,8,9,7,9,12,9,8]
        }],

        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        align: 'center',
                        verticalAlign: 'bottom',
                        layout: 'horizontal'
                    },
                    yAxis: {
                        labels: {
                            align: 'left',
                            x: 0,
                            y: -5
                        },
                        title: {
                            text: null
                        }
                    },
                    subtitle: {
                        text: null
                    },
                    credits: {
                        enabled: false
                    }
                }
            }]
        }
    });

    $('#small').click(function () {
        chart.setSize(400, 300);
    });

    $('#large').click(function () {
        chart.setSize(600, 300);
    });

});

function validate() {
    console.log("checking")
    var txtDOB = $("#txtDate").val();
    var dob = new Date(txtDOB);
    if (dob >= new Date()) {
        alert("Date of Birth is not vaid. Date has to be before today");
        return false;
    }

    var txtPhone = $("#phone").val()
    console.log("checking")
    if (isNaN(txtPhone)) {
        console.log("nan!")
        alert("Phone number should consist of only numbers");
        return false;
    } else {
        if (isNaN(txtPhone)) {
            console.log("nan!")
            alert("Phone number is not of the correct length");
            return false;
        }
    }
}