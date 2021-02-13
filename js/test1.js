$.ajax({
    url: 'https://api.rootnet.in/covid19-in/stats/history',
    type: "get",
    dataType: "json",

    success: function(data) {
        drawTable(data.data);
    }
});

function drawTable(data) {
    for (var i = 0; i < data.length; i++) {
        drawRow(data[i]);
    }
}

function drawRow(rowData) {
    var row = $("<tr />")
    $("#test1DataTable").append(row);
    row.append($("<td>" + rowData.day + "</td>"));
    row.append($("<td>" + rowData.totalSamplesTested + "</td>"));
    row.append($("<td>" + rowData.totalIndividualsTested + "</td>"));
    row.append($("<td>" + rowData.totalPositiveCases + "</td>"));
}