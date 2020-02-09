
const kinveyAppID = 'kid_HJxu-AafL';
const kinveyAppSecret = '3ab82167cd664a4d97cf3077746066c1';
const kinveyServiceBaseUrl = 'https://baas.kinvey.com/';

function login() {
    let loginData = {
        username : $('#loginUsername').val(),
        password : $('#loginPassword').val()
    };
    // alert('IN LOGIN');
    $.ajax({
        method: "POST",
        url:kinveyServiceBaseUrl + 'user/' + kinveyAppID + '/login',
        data:loginData,
        headers: {
            "Authorization": "Basic " + btoa(kinveyAppID + ":" + kinveyAppSecret)
        },
        success: loginSuccess,
        error: showAJAXError
    });

    function loginSuccess(data, status) {
        sessionStorage.username = data.username;
        sessionStorage.authToken = data._kmd.authtoken;
        // showListPostsView();
        // showHideNavLinks();

        showInfo('Login successful');
    }
}