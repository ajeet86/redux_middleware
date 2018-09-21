const API_KEY='b6907d289e10d714a6e88b30761fae22';
const API_URL=`https://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
import axios from 'axios';

export const FATCH_WATHERE='FATCH_WATHERE';

export  function FetchWathere(city) {
    console.log(city);
    const URL_ALL = `${API_URL}&q=${city},us`;
    const url_request = axios.get(URL_ALL);

    type: FATCH_WATHERE
    Payload: url_request


}


