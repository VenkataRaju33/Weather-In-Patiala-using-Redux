import React,{useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

// import { bindActionCreators } from "redux";

import { fetchWeather } from "../actions/fetchData";

const Main = () => {
  const dispatch = useDispatch();
  const {  data } = useSelector(
    (state) => state.products
  );
  
  useEffect(() => {
    dispatch(fetchWeather());
  }, []);
  
  console.log(data, "dataselect");
  return <div>
  <h1> Weather details in {data?.location.name}({data?.location.region})  </h1>
  <h2>{data?.current.weather_descriptions[0]} <img src={data?.current.weather_icons} alt='weather' /> </h2>
  <div>Last observation time: {data.current.observation_time}
  
   </div>
 
    {data&&<div><span>Temperature: </span>
    {data?.current.temperature} °F (feels like:{data?.current.feelslike}°F) </div>}
  </div>;
};

export default Main;
