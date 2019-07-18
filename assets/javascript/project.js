
// var country = 'Atlanta';  //works with cities too
// var place = 'bar'

// var apiKey = 'AIzaSyAq5H3zQDHnoQzLHEg4a1LH9dC5WIlIFwY'
// var queryURL = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + place + '+in+' + country + '&key=' + apiKey

// const proxyurl = "https://cors-anywhere.herokuapp.com/";
// const url = queryURL;
// fetch(proxyurl + url) 
// .then(response => response.text())
// .then(contents => console.log(JSON.parse(contents)))
// .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))


// http://api.eventful.com/rest/events/search?...&keywords=books&location=San+Diego&date=Future&api_key=DzrBFd4tkfmKkSSH


function show_alert() {

    var oArgs = {

        app_key: "DzrBFd4tkfmKkSSH",

        id: "20218701",

        page_size: 25,

    };

    EVDB.API.call("/events/get", oArgs, function (oData) {

        console.log(oData)

    });

}
show_alert()


// function show_alert2() {

//     var oArgs = {

//         app_key: "DzrBFd4tkfmKkSSH",

//         q: "music",

//         where: "San Diego",

//         "date": "2013061000-2015062000",




//     };

//     EVDB.API.call("/events/search", oArgs, function (oData) {

//         console.log(oData)

//     });

// }

// show_alert2()

