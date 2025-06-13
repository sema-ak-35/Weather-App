import { getFlagUrl, getWeatherData } from "./api.js";
import cities from "./constant.js";
import { displayWeatherData, renderLoader,renderError, uiElement, createDataListOption, updateThemeIcon } from "./ui.js";


const body=document.body;

const theme=localStorage.getItem("data-theme") || "light";

document.body.setAttribute("data-theme",theme)

document.addEventListener("DOMContentLoaded",()=>{
    createDataListOption(cities)
})



uiElement.searchInput.addEventListener("submit",async (e)=>{

    e.preventDefault();

    const cityName =e.target[0].value.trim();

    if(!cityName){
        alert("Lütfen bir şehir adı giriniz");

        return;
    }
 
  renderLoader()

    try{
        const weatherData= await getWeatherData(cityName);


    const flag=getFlagUrl(weatherData.sys.country);

    console.log(weatherData)
    console.log(flag)


displayWeatherData(weatherData,flag)



}

     




    catch(error){
     renderError();
    }

    finally{
        renderLoader()
    }

    
})


uiElement.themeBtn.addEventListener("click",()=>{
    const currentTheme=body.getAttribute("data-theme");
    const newTheme=currentTheme==="light" ? "dark": "light"

    body.setAttribute("data-theme", newTheme);

    localStorage.setItem("data-theme",newTheme)

    updateThemeIcon(newTheme)
})


