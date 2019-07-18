
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
// var QueryURL = "http://api.eventful.com/json/events/search?...&keywords=" + keyword + "&location=" + City + "&date=" + when + "&app_key=DzrBFd4tkfmKkSSH"

var queryURL = "http://api.eventful.com/json/events/search?...&keywords=books&location=San+Diego&date=Future&app_key=DzrBFd4tkfmKkSSH"

const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = queryURL;
fetch(proxyurl + url) 
.then(response => response.text())
.then(contents => console.log(JSON.parse(contents)))
.catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))






