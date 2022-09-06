var apiKey = "6b6d7c6a50824c9193e02456220609";


let url = "http://api.weatherapi.com/v1/current.json?key=6b6d7c6a50824c9193e02456220609&q=Stockholm&aqi=no";




function GetWheater(){
    var city = document.getElementById("city").value;
fetch(`https://api.weatherapi.com/v1/current.json?key=6b6d7c6a50824c9193e02456220609&q=`+city+`&aqi=no`, {
        method: 'get'
    })
    .then(res => {
        return res.json()
      })
      .then((response) => {

        var temp = document.getElementById("temp");
        var picW = document.getElementById("warm");
        var picC = document.getElementById("cold");
        var window = document.getElementById("cWindows");
        if(response.current.temp_c < 8){
            temp.innerHTML = ("Det är kallt i "+city+ " temp: " + response.current.temp_c + " celius.");
            picC.style.display = "flex";
            picW.style.display = "none";
            window.style.backgroundColor = "rgba(17, 183, 208, 0.307)";

        }else{
            temp.innerHTML = ("Det är varmt i "+city+ " temp: " + response.current.temp_c + " celius.");
            picW.style.display = "flex";
            picC.style.display = "none";
            window.style.backgroundColor = "rgba(223, 129, 6, 0.63)";
        }
    })
}