import axios from 'axios';
import {BASE_URL} from '../constants.js';

export const GET_DOGS = "GET_DOGS";


export function getDogs(){
    return function(dispatch) {
        return axios.get(BASE_URL)
        .then((response) => {
            dispatch({ 
                type: GET_DOGS,
                payload: response.data
            })
        })
    }
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