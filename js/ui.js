 const uiElement={
 
    searchInput:document.querySelector("form"),

    weatherContainer:document.querySelector(".weather-container"),

    errorContainer:document.querySelector("#error-message"),
    loaderContainer:document.querySelector("#loader"),
    dataList:document.querySelector("#city-list"),
    themeBtn:document.querySelector("#theme-btn")

 }
 
 const displayWeatherData=(data,flagUrl)=>{

    const date= new Date().toLocaleDateString("tr",{
        day:"2-digit",
        month:"long",
        year:"numeric",
        weekday:"long"
    });
   

    uiElement.weatherContainer.innerHTML="";
     const card= document.createElement("div")

     uiElement.weatherContainer.classList.add("active")

     card.className='weather-card';
     card.innerHTML=`
            <div class="weather-header">
               <div class="location-info">
                  <h2 id="location">${data.name},${data.sys.country}</h2>
                  <div class="country-flag">
                     <img src=  ${flagUrl} alt="flag-image">
                  </div>
               </div>
               <p id="date">${date}</p>
            </div>
            <div class="weather-info">
               <div class="temperature">
                  <h3 id="temperature">${Math.round(data.main.temp)}°C</h3>
                  <p>Hissedilen <span id="feel-like">${Math.round(data.main.feels_like)}°C</span></p>
               </div>
               <div class="weather-icon">
                  <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather-icon">
                  <p id="weather-description">${data.weather[0].description}</p>
               </div>
            </div>
            <div class="weather-details">
               <div class="details">
                  <i class="fa-solid fa-wind"></i>
                  <div>
                     <p>Rüzgar Hızı</p>
                     <p id="wind-speed">${data.wind.speed}m/s</p>
                  </div>
               </div>
                <div class="details">
                  <i class="fa-solid fa-droplet"></i>
                  <div>
                     <p>Nem</p>
                     <p id="humidity">${data.main.humidity}%</p>
                  </div>
               </div>
                <div class="details">
                  <i class="fa-solid fa-minimize"></i>
                  <div>
                     <p>Basınç</p>
                     <p id="pressure">${data.main.pressure}hPa</p>
                  </div>
               </div>
            </div>
         `;


    uiElement.weatherContainer.appendChild(card);

      uiElement.errorContainer.classList.remove("show")

 }


 const renderError=()=>{
  uiElement.errorContainer.classList.toggle("show")
  uiElement.weatherContainer.classList.toggle("active")

 }


 const renderLoader=()=>{
  uiElement.loaderContainer.classList.toggle("show")
 }


 const createDataListOption=(cities)=>{
  
  cities.forEach((city)=>{
   const optionEleman=document.createElement("option")
   optionEleman.value=city;

    uiElement.dataList.appendChild(optionEleman);
   
 })




}

 

 const updateThemeIcon=(theme)=>{
 const themeIcon=uiElement.themeBtn.querySelector("i")

 themeIcon.className=theme=="light"? "fa-solid fa-moon": "fa-solid fa-sun"
 }


 export {uiElement,displayWeatherData,renderError,renderLoader,createDataListOption,updateThemeIcon}