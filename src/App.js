import React, { useEffect, useState } from 'react';
import './App.css';
import axios from "axios";
import City from "./City";

function App() {
  const key = "e2e21dc0b1f866c6c79458a1e6335936";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();
  useEffect(() => {
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        console.log(response);
        setCity(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getApi();
  }, [search]);
  return (
    <div className="App">
      <label>Current Weather Condition</label> <br/><br/>
      <input 
        onChange={(e) => setSearch(e.target.value)} 
        type="text" 
        placeHolder="searching..."
      />
      {city && <City city={city}/>}
    </div>
  );
}

export default App;
