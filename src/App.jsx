import React, { useEffect, useState } from "react";
import PinDropIcon from '@material-ui/icons/PinDrop';
import FilterDramaIcon from '@material-ui/icons/FilterDrama';
import CloudIcon from '@material-ui/icons/Cloud';


const App = () =>{

    const [city , setCity] = useState(null);
    const [search , setSearch] = useState('Gujrat');

   useEffect( () =>{
    const watherapi = async () => {
        const apidata = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=c83b44c63179d5f8b3d2f6d46b9573f2`);
        const war = await apidata.json();
        // console.log(war);
        setCity(war.main);
        // setCity(war.weather);
    };
    watherapi();
   },[search]);
   
      
    return(
        <>
        <div className='wather_app'>
               <input
               type='search'
               value={search}
               className='input'
               onChange={ (even)=>{
                setSearch(even.target.value);
               }}
               />
        {!city ? (
            <p style={{marginTop: '20px', fontSize: '23px'}}>no data found</p>
        ) : ( 
            <div>
                <div className='info'>
                    <h1 className='H1'>
                    <PinDropIcon style={{
                        fontSize: '2rem',
                        marginRight: '5px'}}/>
                        {search}
                    </h1>
                    {/* <h2 className='H2'>{city.main}</h2> */}
                    <h4 className='H4'>Temp {city.temp} ℃</h4>
                    <p>{city.temp_min}℃ | {city.temp_max} ℃</p>
                </div>
           
                <div className='cliod'>
                    <div className='one'>
                        <FilterDramaIcon/>
                        <CloudIcon/>
                    </div> 
                    <div className='two'>
                        <FilterDramaIcon/>
                        <CloudIcon/>
                        <CloudIcon/>
                    </div> 
                    <div className='three'>
                        <FilterDramaIcon/>
                        <CloudIcon/>
                        <FilterDramaIcon/>
                    </div> 
                   
                </div> 
            </div>     
        )}
          
        </div>
            
        </>
    );
};

export default App;