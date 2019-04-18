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

//Stripe Things

// Create a Stripe client.
var stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

//// Create an instance of Elements.
//var elements = stripe.elements();
//
//// Custom styling can be passed to options when creating an Element.
//// (Note that this demo uses a wider set of styles than the guide below.)
//var style = {
//  base: {
//    color: '#32325d',
//    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
//    fontSmoothing: 'antialiased',
//    fontSize: '16px',
//    '::placeholder': {
//      color: '#aab7c4'
//    }
//  },
//  invalid: {
//    color: '#fa755a',
//    iconColor: '#fa755a'
//  }
//};
//
//// Create an instance of the card Element.
//var card = elements.create('card', {style: style});
//
//// Add an instance of the card Element into the `card-element` <div>.
//card.mount('#card-element');
//
//// Handle real-time validation errors from the card Element.
//card.addEventListener('change', function(event) {
//  var displayError = document.getElementById('card-errors');
//  if (event.error) {
//    displayError.textContent = event.error.message;
//  } else {
//    displayError.textContent = '';
//  }
//});
//
//// Handle form submission.
//var form = document.getElementById('payment-form');
//form.addEventListener('submit', function(event) {
//  event.preventDefault();
//
//  stripe.createToken(card).then(function(result) {
//    if (result.error) {
//      // Inform the user if there was an error.
//      var errorElement = document.getElementById('card-errors');
//      errorElement.textContent = result.error.message;
//    } else {
//      // Send the token to your server.
//      stripeTokenHandler(result.token);
//    }
//  });
//});
//
//// Submit the form with the token ID.
//function stripeTokenHandler(token) {
//  // Insert the token ID into the form so it gets submitted to the server
//  var form = document.getElementById('payment-form');
//  var hiddenInput = document.createElement('input');
//  hiddenInput.setAttribute('type', 'hidden');
//  hiddenInput.setAttribute('name', 'stripeToken');
//  hiddenInput.setAttribute('value', token.id);
//  form.appendChild(hiddenInput);
//
//  // Submit the form
//  form.submit();
//}

//Stripe Example 5

(function() {
  "use strict";

  var elements = stripe.elements({
    // Stripe's examples are localized to specific languages, but if
    // you wish to have Elements automatically detect your user's locale,
    // use `locale: 'auto'` instead.
    locale: window.__exampleLocale
  });

  /**
   * Card Element
   */
  var card = elements.create("card", {
    iconStyle: "solid",
    style: {
      base: {
        iconColor: "#fff",
        color: "#fff",
        fontWeight: 400,
        fontFamily: "Helvetica Neue, Helvetica, Arial, sans-serif",
        fontSize: "16px",
        fontSmoothing: "antialiased",

        "::placeholder": {
          color: "#BFAEF6"
        },
        ":-webkit-autofill": {
          color: "#fce883"
        }
      },
      invalid: {
        iconColor: "#FFC7EE",
        color: "#FFC7EE"
      }
    }
  });
  card.mount("#example5-card");

  /**
   * Payment Request Element
   */
  var paymentRequest = stripe.paymentRequest({
    country: "US",
    currency: "usd",
    total: {
      amount: 2500,
      label: "Total"
    },
    requestShipping: true,
    shippingOptions: [
      {
        id: "free-shipping",
        label: "Free shipping",
        detail: "Arrives in 5 to 7 days",
        amount: 0
      }
    ]
  });
  paymentRequest.on("token", function(result) {
    var example = document.querySelector(".example5");
    example.querySelector(".token").innerText = result.token.id;
    example.classList.add("submitted");
    result.complete("success");
  });

  var paymentRequestElement = elements.create("paymentRequestButton", {
    paymentRequest: paymentRequest,
    style: {
      paymentRequestButton: {
        theme: "light"
      }
    }
  });

  paymentRequest.canMakePayment().then(function(result) {
    if (result) {
      document.querySelector(".example5 .card-only").style.display = "none";
      document.querySelector(
        ".example5 .payment-request-available"
      ).style.display =
        "block";
      paymentRequestElement.mount("#example5-paymentRequest");
    }
  });

  registerElements([card], "example5");
})();