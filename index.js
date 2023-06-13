const apikey="2dd7d37f4e21d3a2fef1ce126634a0bc";

const form=document.querySelector(".Search");
const input=document.querySelector("#Search");
var img = document.querySelector("#Photo");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let city=input.value;
    document.querySelector("#Submit").innerHTML="Loading...";
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`,
    {
        method:"GET",
    }
    
    )
    .then((response)=>response.json())
    .then((data)=> {
        console.log(data);
        document.querySelector("#degree").innerHTML=((data.main.temp)|0)-273+"˚";
        document.querySelector("#City").innerHTML=data.name;
        document.querySelector("#Country").innerHTML=data.sys.country;
        document.querySelector(".Hit").style.opacity=1;
        document.querySelector("#Submit").innerHTML="Submit";
        let icon=data.weather[0].icon;
        img.setAttribute("src",`http://openweathermap.org/img/w/${icon}.png`);
        document.querySelector("#Photo").style.opacity=1;
    })
    .catch((error)=>console.log(error));


});

const hourElement = document.getElementById("hour");
const minutesElement = document.getElementById("minutes");
const secondElement = document.getElementById("seconds");

function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    h = h < 10 ? "0" + h : h;
    hourElement.innerHTML = h;
    minutesElement.innerHTML = m;
    secondElement.innerHTML = s;
}
updateClock()
setInterval(updateClock, 1000)
