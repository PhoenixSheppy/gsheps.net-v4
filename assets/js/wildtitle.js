if (document.addEventListener) {
    document.addEventListener("DOMContentLoaded", function() {
        loaded();
    });
} else if (document.attachEvent) {
    document.attachEvent("onreadystatechange", function() {
        loaded();
    });
}

function loaded() {

    setInterval(loop, 252);

}

var x = 0;


var titleText = [ "Pξ", "Ph!", "Pho^", "Phoeϟ", "Phoen#", "Phoeni(", "Phoenix^", "Phoenix S*", "Phoenix Sh(", "Phoenix Sheπ", "Phoenix ShepΨ", "Phoenix ShephÂ£", "Phoenix Shephe|", "Phoenix Shepherâ‚¬", "Phoenix Shepher&", "Phoenix Shepherd+", "Phoenix Shepherd - I=", "Phoenix Shepherd - In@", "Phoenix Shepherd - Inf#", "Phoenix Shepherd - Info", "Phoenix Shepherd - InfÂ¬", "Phoenix Shepherd - InÂ¦", "Phoenix Shepherd - I%", "Phoenix Shepherd -", "Phoenix ShepherÂ£", "Phoenix Shephe2", "Phoenix ShephΩ", "Phoenix Shep&", "Phoenix She$", "Phoenix Sh!", "Phoenix S^", "Phoenix*", "Phoeni~", "Phoen`", "Phoe↯", "Pho⇄", "Ph◌", "Pλ"
];

function loop() {

    document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}

// Low-key stolen from https://havesexwith.me, no shame. ¯\_(ツ)_/¯