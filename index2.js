const apikey="7969e826a810543842fe02449b723f23"
const apiurl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");

 async function chechweather(city){
    const responce=await fetch(apiurl+ city+`&appid=${apikey}`);
     var data=await responce.json();
     console.log(data);

     document.querySelector(".city").innerHTML=data.name;
     document.querySelector(".dreege").innerHTML=Math.round(data.main.temp)+"°C" ;
     document.querySelector(".hum").innerHTML=data.main.humidity +"%";
     document.querySelector(".km").innerHTML=data.wind.speed +"km/h";

     

}
searchbtn.addEventListener('click',()=>{
    chechweather(searchbox.value);
})



