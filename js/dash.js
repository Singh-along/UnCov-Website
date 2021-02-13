$.ajax({
    url: 'https://api.rootnet.in/covid19-in/hospitals/beds',
    type: "get",
    dataType: "json",

    success: function(data) {
        drawTable(data.data.regional);
    }
});

function drawTable(data) {
    for (var i = 0; i < data.length; i++) {
        drawRow(data[i]);
    }
}

function drawRow(rowData) {
    var row = $("<tr />")
    $("#bedsDataTable").append(row);
    row.append($("<td>" + rowData.state + "</td>"));
    row.append($("<td>" + rowData.ruralHospitals + "</td>"));
    row.append($("<td>" + rowData.ruralBeds + "</td>"));
    row.append($("<td>" + rowData.urbanHospitals + "</td>"));
    row.append($("<td>" + rowData.urbanBeds + "</td>"));
    row.append($("<td>" + rowData.totalHospitals + "</td>"));
    row.append($("<td>" + rowData.totalBeds + "</td>"));
    row.append($("<td>" + rowData.asOn + "</td>"));
}