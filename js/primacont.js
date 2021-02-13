$.ajax({
    url: 'https://api.rootnet.in/covid19-in/contacts',
    type: "get",
    dataType: "json",

    success: function(data) {
        putData(data.data.contacts.primary);
    }
});

function putData(data) {
    for (var i = 0; i < data.length; i++) {
        appendData(data[i]);
    }
}



function appendData(data) {
    var mainContainer = document.getElementById("primcont");
    var div = document.createElement("div");
    div.innerText = 'Name: ' + data.number;
    div.innerText = 'Name: ' + data.number - tollfree;
    div.innerText = 'Name: ' + data.email;
    div.innerText = 'Name: ' + data.twitter;
    div.innerText = 'Name: ' + data.facebook;
    div.innerText = 'Name: ' + data.media;
    mainContainer.appendChild(div);
}