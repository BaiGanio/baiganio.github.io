/* MAIN APP LOGIC */
function startAppLogic() {

    let userID = sessionStorage.getItem("userId");
    console.log("id" + userID);
    // $("#linkLogout").click(logoutUser);

    // if(userID){
    //     $('#loginLnk').text("");
    //     $("#linkLogin").hide();
    //     let userName = sessionStorage.getItem("userName");
    //     $('#userMsg').text("Welcome, " + userName + "!");
    //     $("#loggedInUser").show();
    //     $("#linkLogout").show();
    // }
    // else{
    //     $('#loginLnk').text("Login");
    //     $("#linkLogin").show();
    //     $("#loggedInUser").hide();
    //     $("#linkLogout").hide();
    // }

    function logoutUser() {
        $('#loginLnk').text("Login");
        $("#linkLogin").show();
        sessionStorage.clear();
        $("#user").hide();
        $("#linkLogout").hide();

        $('#userMsg').text("");
        showInfo("Logout successful.");

        function showInfo(message) {
            $('#infoBox').text(message);
            $('#infoBox').show();
            setTimeout(function () {
                $('#infoBox').fadeOut();
            }, 3000);
        }

    }

}