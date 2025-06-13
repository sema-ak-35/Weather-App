const apiKey="7b870809d5a0a131a7b82369a827c0c6"

const getWeatherData= async (city)=>{
    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=tr`)

   const data=await response.json()

   return data;
}


const getFlagUrl=(countryCode)=> ` https://flagcdn.com/108x81/${countryCode.toLocaleLowerCase()}.png`
    
  


export {getWeatherData,getFlagUrl}