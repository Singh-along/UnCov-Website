$.ajax({
    url: 'https://api.rootnet.in/covid19-in/notifications',
    type: "get",
    dataType: "json",

    success: function(data) {
        drawTable(data.data.notifications);
    }
});

function drawTable(data) {
    for (var i = 0; i < data.length; i++) {
        drawRow(data[i]);
    }
}

function drawRow(rowData) {
    var row = $("<tr />")
    $("#notifyDataTable").append(row);
    row.append($("<td>" + rowData.title + "</td>"));
    row.append($("<td><a>" + rowData.link + "</a></td>"));
}