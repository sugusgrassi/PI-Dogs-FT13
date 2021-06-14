import axios from 'axios';
import {BASE_URL, TEMP_URL} from '../constants.js';

export const GET_DOGS = "GET_DOGS";
export const PAGINATE_DOGS = "PAGINATE_DOGS";
export const STOP_LOADING = "STOP_LOADING";
export const GET_TEMP = "GET_TEMP";
export const SET_TEMP_DOG = "SET_TEMP_DOG";

export function getDogs(str){
    return function(dispatch) {
    return axios.get(BASE_URL + str)
    .then((response) => {
        dispatch({ 
            type: GET_DOGS,
            payload: response.data
        })
    }).catch(error => console.log(error))
    }
}

export function getTemperaments(){
    return function(dispatch) {
    return axios.get(TEMP_URL)
    .then((response) => {
        dispatch({ 
            type: GET_TEMP,
            payload: response.data
        })
    }).catch(error => console.log(error))
    }
}


export function paginate(payload) {
    return { type: PAGINATE_DOGS, payload };
}

export function stopLoading(payload) {
    return { type: STOP_LOADING, payload };
}

export function setTempDog(payload) {
    return { type: SET_TEMP_DOG, payload };
}

// Con fetch
// export function getDogs(){
//     return function(dispatch) {
//         return fetch(BASE_URL)
//         .then(response => response.json())
//         .then(json => {
//             dispatch({ 
//                 type: GET_DOGS,
//                 payload: json
//             })
//         })
//     }
// }