var text = "Hej jag heter Oskar Markbäck Zeilon,<br>bor precis utanför Hässleholm med sambo och hund.";
var text2 = "Här kommer blivande projekt dyka upp";
var empty  = "";
var help = "Du kan använda dessa kommandon:<br>projekt,info,clear,restart,?help"

function commando() {
   var fetched = document.getElementById("getInput").value;
   var changed = document.getElementById("infowrite");
    if(fetched == "?help"){
       changed.innerHTML = help;
    }if(fetched == "info"){
        changed.innerHTML = text;  
    }
    if(fetched == "projekt"){
        changed.innerHTML = text2;
    }
    if(fetched == "clear"){
        changed.innerHTML = empty;
    }
    if(fetched == "restart"){
        history.go(0);
    }
    if(fetched == "wheater"){
        window.location = "https://badmondy.github.io/Portfolio/chatbot.html";
    }
}


function sendEmail() {
    var link = "mailto:oskarmarkback@gmail.com";

    window.location.href = link;
}

function HideData() {
    var h = document.getElementById("proffs");
    var p = document.getElementById("hideterminal");
    var o = document.getElementById("hej");
    var i = document.getElementById("iframe");
    h.style.display = "none";
    p.style.display = "none";
    o.innerHTML = "BankApp Made in C#";
    i.style.display = "flex";
    
}

