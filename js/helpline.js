$.ajax({
    url: 'https://api.rootnet.in/covid19-in/contacts',
    type: "get",
    dataType: "json",

    success: function(data) {
        drawTable(data.data.contacts.regional);
    }
});

function drawTable(data) {
    for (var i = 0; i < data.length; i++) {
        drawRow(data[i]);
    }
}

function drawRow(rowData) {
    var row = $("<tr />")
    $("#personDataTable").append(row);
    row.append($("<td>" + rowData.loc + "</td>"));
    row.append($("<td>" + rowData.number + "</td>"));
}
