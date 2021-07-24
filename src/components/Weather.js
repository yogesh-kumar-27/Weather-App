import React, { useState, useEffect } from "react";
import "./weather.css";

const Weather = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState("Delhi");

  const apiKey = "057fd85d870306b3b1701b5711540541";

  const getData = async () => {
    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${apiKey}`);
    const resdata = await res.json();
    //console.log(resdata.weather[0].icon);
    console.log(resdata)
    setCity(resdata.main);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line 
  }, [search]);


  return (
    <>
      <div className="container text-center py-5">
        
        <div className="card shadow">
          <div className="card-body">
          <div className="text1 ">
            <h1 className='text-white'>Weather App</h1>
          </div>
            <div className="row">
            <div className=" d-flex justify-content-center mt-5">
            <div className="input-field">
              {" "}
              <input
                  className="form-control shadow search"
                  type="search"
                  value={search}
                  onChange={(e) => {
                    setSearch(e.target.value, e.preventDefault());
                  }}
                />
              <button className="btn btn1">
                <i className="fa fa-search"></i>
              </button>{" "}
            </div>
          </div>
          <div className="text1 py-3 ">
            <h1 className='text-white'>Live Weather Condition</h1>
          </div>
              
             
                {!city ? (
                  <h1 className="text-danger">No data found</h1>
                ) : (
                  <>
                    <div>
                      <div className="col-lg-6 offset-3 py-3">
                        <h1 className="text-white">{search}</h1>
                      </div>
                      <div>
                        <h2 className="text-white">{city.temp}&deg;C</h2>
                      </div>
                      <div>
                        <h3 className="text-white">
                          Min: {city.temp_min} &deg;C || Max: {city.temp_max}
                          &deg;C || humidity {city.humidity}% 
                          
                        </h3>
                      </div>
                    </div>
                  </>
                )}
              
            </div>
            <div className="d-flex justify-content-center align-items-center mt-5 gap-4 icons">
            <span>
              <i className="fa fa-google"></i>
            </span>{" "}
            <span>
              <i className="fa fa-facebook"></i>
            </span>{" "}
            <span>
              <i className="fa fa-twitter"></i>
            </span>{" "}
            <span>
              <i className="fa fa-instagram"></i>
            </span>{" "}
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
