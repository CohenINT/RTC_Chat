﻿

$(document).ready(init);
function init() {

    document.getElementsByTagName("html")[0].addEventListener("keypress", function (e) {

        if (e.keyCode != 13) {
            return;
        }

        //refereing to home page
        document.location.href = document.location.origin + "/home?user=" + document.getElementById("user_nick").value;





    });


}