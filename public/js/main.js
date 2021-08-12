const submitBtn=document.getElementById('submitBtn');
const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const temp_status=document.getElementById('temp_status');
const temp=document.getElementById('temp');
const getInfo=async (event)=>{
    event.preventDefault();
    let city_val=cityName.value;
    console
    if(city_val===""){
        city_name.innerText="Please enter name of a city";
    }
    else{
        console.log(city_val);
    try{
        let url=`http://api.openweathermap.org/data/2.5/weather?q=${city_val}&units=metric&appid=a4b0321adf0c391dc20386fd6c0e74cb`;  
    const response=await fetch(url);
        const data=await response.json();
        const arrData=[data];
        temp.innerText=`${arrData[0].main.temp.toString()} \xB0C`
        temp_status.innerText=arrData[0].weather[0].main;
    }
    catch{

    }
    }
};
submitBtn.addEventListener("click",getInfo);