import { GET_DOGS, PAGINATE_DOGS, STOP_LOADING, GET_TEMP, SET_TEMP_DOG } from "../actions/index";

const initialState = {
    dogs: [],
    selectedTempDogs: [],
    temperaments: [],
    loading: true,
    currentPage: 1,
    dogsPerPage: 8
}

function rootReducer(state = initialState, action){
    if (action.type === GET_DOGS) {
        return {
            ...state,
            dogs: action.payload,
            loading: false
        }
    }
    if (action.type === GET_TEMP) {
        return {
            ...state,
            temperaments: action.payload
        }
    }
    if (action.type === PAGINATE_DOGS) {
        return {
            ...state,
            currentPage: action.payload
        }
    }
    if (action.type === STOP_LOADING) {
        return {
            ...state,
            loading: false
        }
    }
    if (action.type === SET_TEMP_DOG) {
        return {
            ...state,
            selectedTempDogs: action.payload
        }
    }
    
    return state;
}

export default rootReducer;