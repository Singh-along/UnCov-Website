$.ajax({
    url: 'https://api.rootnet.in/covid19-in/hospitals/medical-colleges',
    type: "get",
    dataType: "json",

    success: function(data) {
        drawTable(data.data.medicalColleges);
    }
});

function drawTable(data) {
    for (var i = 0; i < data.length; i++) {
        drawRow(data[i]);
    }
}

function drawRow(rowData) {
    var row = $("<tr />")
    $("#beds1DataTable").append(row);
    row.append($("<td>" + rowData.state + "</td>"));
    row.append($("<td>" + rowData.name + "</td>"));
    row.append($("<td>" + rowData.city + "</td>"));
    row.append($("<td>" + rowData.ownership + "</td>"));
    row.append($("<td>" + rowData.admissionCapacity + "</td>"));
    row.append($("<td>" + rowData.hospitalBeds + "</td>"));
}