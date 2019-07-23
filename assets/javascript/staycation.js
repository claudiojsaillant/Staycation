$(document).ready(function () {
    //in case needed

});

<<<<<<< HEAD
function getCredentials(){
=======
function getCredentials() {
>>>>>>> 9bd3e1b108577b8e743bacddcaa8451881b78153
    //because both js files are linked to index.html global variable declared on project.js are accessible in staycation.js
    console.log("This login is from staycation.js", username + " " + password);
    console.log("This signup is from staycation.js", newUsername + " " + newPassword);
}

$("#linkmodal").click(function () {
    $("#linkmodal").hide();
})

$("#modal-close").click(function () {
    $("#linkmodal").show();
})


$('#signupform').hide();
$('#logform').hide();

$('#registermodal').on('click', function () {
    $('#signupform').show();
    $('#logform').hide();
})

$('#logmodal').on('click', function () {
    $('#logform').show();
    $('#signupform').hide();

})

var firebaseConfig = {
    apiKey: "AIzaSyDMa8F9axhjR2EACxjjPbjiVziH7gqfZjA",
    authDomain: "mydata-efc36.firebaseapp.com",
    databaseURL: "https://mydata-efc36.firebaseio.com",
    projectId: "mydata-efc36",
    storageBucket: "mydata-efc36.appspot.com",
    messagingSenderId: "233509212002",
    appId: "1:233509212002:web:2c66b91bda714330"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Create a variable to reference the database.
var database = firebase.database();
var userCount = 0;
var isLogged;
var userLogged;
<<<<<<< HEAD
var favortiteArray = ['manuel'];
var actualUserFav;
=======
var actualUserFav = [];
>>>>>>> 9bd3e1b108577b8e743bacddcaa8451881b78153
var tryingToLog = false;
database.ref('/userAuth').set({})

database.ref().on('value', function (snap) {
    var userRef;
    if (userLogged != undefined) {
        var howLong = userLogged.length;
        var userNumber = userLogged.charAt(howLong - 1);
        var userRef = 'User' + userNumber;
        var favRef = '/User' + userNumber + '/favorites';
        if (snap.child(favRef).exists()) {
            actualUserFav = snap.val()[userRef].favorites.favorite;
            actualUserFav = JSON.parse(actualUserFav);
        }
    }
    if (snap.child("/userAuth").exists()) {
        var currentid = snap.val().userAuth.userid;
        var currentpwd = snap.val().userAuth.userpwd;
        var howLong = currentid.length;
        var userNumber = currentid.charAt(howLong - 1)
        var userRef = 'User' + userNumber;
        var childRef = '/User' + userNumber;
        var favRef = childRef + '/favorites'

        if (snap.child(childRef).exists()) {
            idInDb = snap.val()[userRef].userid;
            pwdInDb = snap.val()[userRef].userpwd;
            if (currentid === idInDb) {
<<<<<<< HEAD
                
=======

>>>>>>> 9bd3e1b108577b8e743bacddcaa8451881b78153
                if (currentpwd === pwdInDb && tryingToLog) {
                    tryingToLog = false;

                    userLogged = idInDb;
                    alert(userLogged + " Has loged in to the webpage!");
                    $('#logbutton').hide();
                    $('#logform').hide();
                    $('#log-out').show();
                    database.ref('/userAuth').set({})
                    isLogged = true;
                    if (snap.child(favRef).exists()) {
                        actualUserFav = snap.val()[userRef].favorites.favorite;
                        actualUserFav = JSON.parse(actualUserFav);
                    }
                    database.ref(childRef + '/isLogged').set({
                        isLogged: true
                    })
                }
<<<<<<< HEAD
              else  if (tryingToLog) {
=======
                else if (tryingToLog) {
>>>>>>> 9bd3e1b108577b8e743bacddcaa8451881b78153
                    alert('Incorrect password.')
                    $('#pwd-login').val('');
                    tryingToLog = false
                }
            }
            else if (tryingToLog) {
                alert('Incorrect ID.')
                $('#id-login').val('');
                $('#pwd-login').val('');
                tryingToLog = false
            }
        }
        else if (tryingToLog) {
            alert('Incorrect ID/Pasword.')
            $('#id-login').val('');
            $('#pwd-login').val('');
            tryingToLog = false
        }
    }

})

database.ref('/userCount').on('value', function (snap) {
    if (snap.child("/userCount").exists()) {
        userCount = snap.val().userCount
    }
})

$('#submitbutton').on('click', function (event) {
    event.preventDefault();
    //var userid = $('#id-input').val().trim();
    //var userpwd = $('#pwd-input').val().trim();
    if (userid != '' && userpwd != '') {
        userCount++;
        printID = userid + userCount;
        $('#id-input').val('');
        $('#pwd-input').val('');
        alert("Your generated user id is : " + printID + " , when you log in, you have to use this ID with your password!");
        database.ref('/userCount').set({
            userCount: userCount
        })
        var newUserRef = database.ref('/User' + userCount)
        userid = userid + userCount;
        newUserRef.set({
            userid: userid,
            userpwd: userpwd
        })
    }
    else {
        alert('Input a valid userID/Pasword')
    }
})


function sendSignupToDB(){
    var userid = newUsername;
    var userpwd = newPassword;
    if (userid != '' && userpwd != '') {
        userCount++;
        printID = userid + userCount;
        $('#id-input').val('');
        $('#pwd-input').val('');
        alert("Your generated user id is : " + printID + " , when you log in, you have to use this ID with your password!");
        database.ref('/userCount').set({
            userCount: userCount
        })
        var newUserRef = database.ref('/User' + userCount)
        userid = userid + userCount;
        newUserRef.set({
            userid: userid,
            userpwd: userpwd
        })
    }
    else {
        alert('Input a valid userID/Pasword')
    }
}

$('#log-button').on('click', function (event) {

    event.preventDefault();
    tryingToLog = true;
    //var logid = $('#id-login').val().trim();
    //var logpwd = $('#pwd-login').val().trim();

    if (logid != '' && logpwd != '') {
        database.ref('/userAuth').set({
            userid: logid,
            userpwd: logpwd
        })
    }
    else if (tryingToLog) {
        alert('Input a valid userID/Pasword')
    }
})

function sendLoginToDB(){
    tryingToLog = true;
    var logid = username;
    var logpwd = password;

    if (logid != '' && logpwd != '') {
        database.ref('/userAuth').set({
            userid: logid,
            userpwd: logpwd
        })
        alert(username + ' is logged in');
        $("#login").hide();
    }
    else if (tryingToLog) {
        alert('Input a valid userID/Pasword')
    }
}

$('#log-out').hide();
$('#log-out').on('click', function () {
    $('#id-login').val('')
    $('#pwd-login').val('')
    actualUserFav = [];
    isLogged = false
    loggedRef = '/User' + userLogged.charAt(userLogged.length - 1) + '/isLogged';
    database.ref(loggedRef).set({
        isLogged: false
    })
    alert('User: ' + userLogged + ' has sign out.');
    userLogged = '';
<<<<<<< HEAD
=======
    actualUserFav = [];
>>>>>>> 9bd3e1b108577b8e743bacddcaa8451881b78153
    // $('#logbutton').show();
    $('#logform').show();
    $('#log-out').hide();
})

<<<<<<< HEAD
=======

$(document).on('click', ".favorite-button", function () {
    
    console.log('hello')
    var buttonDiv = $(this).attr('div-data')
    var newFavorite = $('#' + buttonDiv);
    $(this).remove();
    newFavorite = newFavorite.html()
})

>>>>>>> 9bd3e1b108577b8e743bacddcaa8451881b78153
function sendLogoutToDB(){
    $('#id-login').val('');
    $('#pwd-login').val('');
    actualUserFav = [];
    isLogged = false;
    loggedRef = '/User' + userLogged.charAt(userLogged.length - 1) + '/isLogged';
    database.ref(loggedRef).set({
        isLogged: false
    })
    alert('User: ' + userLogged + ' has sign out.');
    userLogged = '';
    $("#login").show();
    $("#preferences").hide();
    $("#logout").hide();
}

$('#favorite').on('click', function () {
<<<<<<< HEAD
    var howLong = userLogged.length;
    var userNumber = userLogged.charAt(howLong - 1);
    var userRef = '/User' + userNumber + '/favorites';

    database.ref(userRef).set({
        favorite: JSON.stringify(favortiteArray)
    })
=======

    var howLong = userLogged.length;
    var userNumber = userLogged.charAt(howLong - 1);
    var userRef = '/User' + userNumber + '/favorites';
    var elementFav = '<div>' + newFavorite + '</div>';


    actualUserFav.push(elementFav);
    // making sure array doesnt have duplicates
    var newArray = []
    $.each(actualUserFav, function (i, el) {
        if ($.inArray(el, newArray) === -1) newArray.push(el);
    });

    actualUserFav = newArray;
    console.log(actualUserFav)

    database.ref(userRef).set({
        favorite: JSON.stringify(actualUserFav)
    })

>>>>>>> 9bd3e1b108577b8e743bacddcaa8451881b78153
})


