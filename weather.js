const inputbox=document.querySelector('.input-box');
const searchbtn= document.getElementById('search-button');
const weather_img=document.querySelector('.weather-img');
const temperature =document.querySelector('.temperature');
const description =document.querySelector('.description');
const humidity= document.getElementById('humidity');
const wind_speed= document.getElementById('wind-speed');
const location_not_found=document.querySelector('.location-not-found');
const weather_body=document.querySelector('.weather-body')



async function checkWeather(city)
{
        
    
    const api_key="2bfd08076ab9f2527a993dee848cb808";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
        
    const weather_data = await fetch(`${url}`).then(response=>response.json());

        
        
    if(weather_data.cod==`404`)
    {
        location_not_found.style.display="flex";
        weather_body.style.display="none";
      console.log("error");
       return;
    }
    location_not_found.style.display="none";
   weather_body.style.display="flex";
        
   temperature.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`;
     description.innerHTML=`${weather_data.weather[0].description}`;

        humidity.innerHTML=`${weather_data.main.humidity}%`;

        wind_speed.innerHTML=`${weather_data.wind.speed}Km/hr`;

        switch(weather_data.weather[0].main)
        {
                case 'Clouds':
                 weather_img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKFrwcf68XXJjhB3Dsc01nF2ogghbGpUe2RQ&s";
                break;

                case 'Haze':
                 weather_img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThQdUHFnHaOq_U8issvUuaqLPyecDAswNj9g&s";
                break;

                case 'Rain':
                 weather_img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB4R2l09FV_e2uEE44jkq36ixdVk5Bz2gilg&s";
                break;

                case 'Snow':
                 weather_img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVch9oEXSvMWH8d5nYPHlwN2V0kajQtn67Ew&s";
                break;

                case 'Mist':
                 weather_img.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTosgaTd3rme-Kh_eNx8FRyt1MnvbhDokS4aw&s";
                break;
        }
       
}
searchbtn.addEventListener('click',()=>{
    checkWeather(inputbox.value);
});
