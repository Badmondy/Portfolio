var apiKey = "6b6d7c6a50824c9193e02456220609";


let url = "https://api.weatherapi.com/v1/current.json?key=6b6d7c6a50824c9193e02456220609&q=Stockholm&aqi=no";




function GetWheater(){
    var city = document.getElementById("city").value;
    var sun = document.getElementById("sunny");
    var cold = document.getElementById("cold");
fetch("https://api.weatherapi.com/v1/current.json?key=6b6d7c6a50824c9193e02456220609&q="+city+"&aqi=no", {
        method: 'get'
    })
    .then(res => {
        return res.json()
      })
      .then((response) => {

        var temp = document.getElementById("infowrite");
        if(response.current.temp_c == 50){
            temp.innerHTML = ("Släng dig i sjön!" + response.current.temp_c);
            sun.style.display = "flex";
            cold.style.display = "none";
        }
        else if(response.current.temp_c < 8){
            temp.innerHTML = ("Det är kallt i "+city+ " temp: " + response.current.temp_c + " celius.");
            sun.style.display = "none";
            cold.style.display = "flex";
           
        }else if(response.current.temp_c > 15) {
            temp.innerHTML = ("Det är varmt i "+city+ " temp: " + response.current.temp_c + " celius.");
            sun.style.display = "flex";
            cold.style.display = "none";
        }else{
            temp.innerHTML = "Den staden gick inte att hitta!";
            sun.style.display = "none";
            cold.style.display = "none";
        }
        

       
        
    })
}
