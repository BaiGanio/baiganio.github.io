/**
 * Created by Republic Of Gamers on 7/16/2016.
 */
/* Set the width of the side navigation to 250px and the left margin of the page content to 250px
 and add a black background color to body */

let maxwidth1 = $(window).width();
if(maxwidth1 > 320 && maxwidth1 <= 361){
    document.getElementById("myImg").style.width = "80%";
}else{
    // // document.getElementById("portalsHolder").style.width = "80%";
    // $('portalsHolder').css('width, margin', '20%, 0 auto')
    document.getElementById("myImg").style.width = "50%";
}

function openNav() {
    let maxwidth = $(window).width();
    let maxheght = $(window).height();
    if(maxwidth <= 321){
        document.getElementById("mySidenav").style.width = "94%";
        // document.getElementById("main").style.marginLeft = "70%";
        // document.getElementById("footer-holder").style.marginLeft = "70%";
         document.body.style.backgroundColor = "rgba(0,0,0,0.4)"
    }
    else if(maxwidth >= 320 && maxwidth <= 360){
        document.getElementById("mySidenav").style.width = "90%";
    }
    else if(maxwidth > 360 && maxwidth <= 800){
        document.getElementById("mySidenav").style.width = "90%";
        document.getElementById("main").style.marginLeft = "90%";
        document.getElementById("footer-holder").style.marginLeft = "90%";
    }
    else if(maxwidth >= 800 && maxwidth <= 980){
        document.getElementById("mySidenav").style.width = "27%";
        document.getElementById("main").style.marginLeft = "27%";
        document.getElementById("footer-holder").style.marginLeft = "27%";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)"
    }
    else if(maxwidth > 980 && maxwidth <= 1280){
        document.getElementById("mySidenav").style.width = "25%";
        document.getElementById("main").style.marginLeft = "25%";
        document.getElementById("footer-holder").style.marginLeft = "25%";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)"
    }
    else{
        document.getElementById("mySidenav").style.width = "30%";
        document.getElementById("main").style.marginLeft = "30%";
        document.getElementById("footer-holder").style.marginLeft = "30%";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)"
    }
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
    // let mo = $('span .container-sandwich[data-menuopen=false]');
    // if(!mo.attr('data-menuopen')){
    //     mo.toggle('change');
    //     mo.removeAttr('data-menuopen');
    // }
    // console.log(mo);
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("footer-holder").style.margin = "0 auto";


    document.body.style.backgroundColor = "white";
}


$(function () {
    // alert('Here');
    let maxwidth = $(window).width();
    // alert('Here is maxwidth: ' + maxwidth + 'px');
    if(maxwidth < 720){
        let move = "expand";
        $('.page-navigation a').click(function(){
            $('.sidebar').hide();
            $('#shrink-menu').show();
        });
        $('#shrink-menu').click(function () {
            $('.sidebar').show();
            $('#shrink-menu').hide();
        });
    }

});
