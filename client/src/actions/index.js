import axios from 'axios';
import {BASE_URL} from '../constants.js';

export const GET_DOGS = "GET_DOGS";
export const PAGINATE_DOGS = "PAGINATE_DOGS";

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

export function paginate(payload) {
    return { type: PAGINATE_DOGS, payload };
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