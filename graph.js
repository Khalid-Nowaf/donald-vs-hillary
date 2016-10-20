window.onload = function () {
    // socket
    var Socket_d = new WebSocket("ws://localhost:1880/donald");
    var Socket_h = new WebSocket("ws://localhost:1880/hillary");
    var to = 0; // total number of tweets


    // initial values of dataPoints
    var dps = [
        { label: "Anti-Donald", y: 0 },
        { label: "Pro-Donald", y: 0 },
        { label: "N", y: 0 },
        { label: "anti-hillary", y: 0 },
        { label: "Pro-hillary", y: 0 }
    ];
    var totalEmployees = "total people on campus:" + 0;

    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "theme2",
        title: {
            text: "People On Campus"
        },
        axisY: {
            title: "Number of People"
        },
        legend: {
            verticalAlign: "top",
            horizontalAlign: "centre",
            fontSize: 18

        },
        data: [{
            type: "column",
            showInLegend: true,
            legendMarkerType: "none",
            legendText: totalEmployees,
            indexLabel: "{y}",
            dataPoints: dps
        }]
    });

    // renders initial chart
    chart.render();


    var updateC = function (s, c) {

        if (c == "d") {
            if (s < - 1)
                dps[0].y += 1;
            else if (s >= - 1 && s <= 1)
                dps[2].y += 1;
            else if (s > 1)
                dps[1].y += 1;
        } else if (c == "h") {
            if (s < - 1)
                dps[3].y += 1;
            else if (s >= - 1 && s <= 1)
                dps[2].y += 1;
            else if (s > 1)
                dps[4].y += 1;
        }

        to += 1;
        totalEmployees = "total tweets analized: " + to;
        chart.options.data[0].legendText = totalEmployees;
        randC();
    }

    var randC = function () {
        var dtotal = (((dps[1].y - dps[0].y + dps[3].y) / (to - dps[2].y)) * 100);
        var htotal = (((dps[4].y - dps[3].y + dps[0].y) / (to - dps[2].y)) * 100);
        document.getElementById("d").innerHTML = ((dtotal / (dtotal + htotal)) * 100) + " %";
        document.getElementById("h").innerHTML = ((htotal / (dtotal + htotal)) * 100) + " %";
        chart.render();
    }


    Socket_d.onmessage = function (event) {
        //console.log(JSON.parse(event.data));
        updateC(JSON.parse(event.data), 'd');
    }

    Socket_h.onmessage = function (event) {
        //console.log(JSON.parse(event.data));
        updateC(JSON.parse(event.data), 'h');
    }

}	