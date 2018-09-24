const API_KEY='d59015145f737183141cd13dc9f701bb';
const API_URL=`http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
import axios from 'axios';
import { request } from 'http';

export const FATCH_WATHERE='FATCH_WATHERE';

export  function FetchWathere(city) {
    console.log(city);
    const URL_ALL = `${API_URL}&q=${city},us`;
    const url_request = axios.get(URL_ALL);
    //console.log('Requst:<br/>',request);
  return{
    type: FATCH_WATHERE,
    payload: url_request

  }
   


}


