import { GET_DOGS, GET_DOG_DETAIL, GET_TEMP, PAGINATE_DOGS, STOP_LOADING, SET_TEMP_DOG, CLEAR_DOG_DETAIL } from "../actions/index";

const initialState = {
    dogs: [],
    dogDetail: {},
    temperaments: [],
    selectedTempDogs: [],
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
    if (action.type === GET_DOG_DETAIL) {
        return {
            ...state,
            dogDetail: action.payload,
            loading: false
        }
    }
    if (action.type === CLEAR_DOG_DETAIL) {
        return {
            ...state,
            dogDetail: {}        }
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