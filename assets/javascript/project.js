var keyword = 'food';
var username;
var password;

$(".cat").click(function (event) {
    event.preventDefault();
    console.log("You picked a category: ", $(this).attr("data-val"));
    keyword = $(this).attr("data-val");
    console.log("New keyword: ", keyword);

    $("#loading").show();

    var place = 'Georgia';
    var when = 'Future';
    var queryURL = "http://api.eventful.com/json/events/search?keywords=" + keyword + "&location=" + place + "&date=" + when + "&app_key=DzrBFd4tkfmKkSSH"
    var eventData = '';

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url = queryURL;
    fetch(proxyurl + url)
        .then(response => response.text())
        .then(function (data) {
            var myData = JSON.parse(data)
            console.log(myData)

            //pull data with myData variable//
            $("#loading").hide();
            $("#events-response").append("<div><h4 id='key'>" + keyword + "</h4></div>");

            for (var i = 0; i < 15; i++) {

                newDiv = $('<div>')
                newDiv.attr('class', 'event')
                newDiv.attr('id', 'event' + i)
                var newA = "<a href='" + myData.events.event[i].url + "' target='_blank' alt='link to event' data-toggle='tooltip' data-placement='top' title='" + myData.events.event[i].title + "'><img class='thumbnail' src='" + myData.events.event[i].image.medium.url + "'></a>"
                var newButton = $('<button>')
                newButton.attr('class', 'favorite-button');
                newButton.attr('div-data', 'event' + i);
                newButton.text('Favorite this event!')
                newDiv.append(newA);
                if (userLogged != undefined) {
                    newDiv.append(newButton);
                }
                $("#events-response").append(newDiv);

            }


        })
        .catch(() => console.log("Can’t access " + url + " response. Blocked by browser??"))

    $(".modalbox").hide();
});


//Open and close sidenav
function w3_open() {
    $("#mySidebar").show();
}

function w3_close() {
    $("#mySidebar").hide();
}

//Open preferences modal
$("#preferences").click(function (event) {
    event.preventDefault();
    $("#id01").show();
})

//Open login modal
$("#login").click(function (event) {
    event.preventDefault();
    $("#login-modal").show();
})

//Login button click
$('#login-btn').on('click', function (event) {
    event.preventDefault();
    username = $("#username").val().trim();
    password = $("#password").val().trim();
    console.log("Reached project.js", username + "; " + password);
    getCredentials();
    sendLoginToDB();
    $("#login-modal").modal('hide');
});

//Register button click
$("#register-btn").on('click', function () {
    $("#signup-modal").modal('show');
    $("#login-modal").modal('hide');
});

//Sign up button click
$('#signup-btn').on('click', function (event) {
    event.preventDefault();
    newUsername = $("#newUsername").val().trim();
    newPassword = $("#newPassword").val().trim();
    console.log("Reached project.js", newUsername + "; " + newPassword);
    getCredentials();
    sendSignupToDB();
    $("#signup-modal").modal('hide');
});

//Log out button click
$("#logout").on('click', function () {
    sendLogoutToDB();
})

// API IP GEO LOCATOR

const proxyURL = "https://cors-anywhere.herokuapp.com/";
const URL = 'https://api.ipgeolocation.io/ipgeo?apiKey=8d5cbdeea6334025a6ce5f790696f479';
fetch(proxyURL + URL)
    .then(response => response.text())
    .then(function (data) {
        var ipData = JSON.parse(data);
        $('#country').append('Country: ' + ipData.country_name);
        $('#state').append('State: ' + ipData.state_prov);
    })
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser??"))