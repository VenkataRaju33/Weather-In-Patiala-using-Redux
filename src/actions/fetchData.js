import axios from "axios";
import { fetchDataRequest, fetchDataSuccess } from "./action";

export function fetchWeather() {
  console.log("fetching");
  return (dispatch) => {
    dispatch(fetchDataRequest());
    axios.get('http://api.weatherstack.com/current?access_key=62dab9574b49d46dbf6108a64a54ff65&query=patiala&units=f')
      
      .then((response) => {
       
        dispatch(fetchDataSuccess(response.data));
        console.log(response.data, "repsonsefetch");
      })
      
  };
}
