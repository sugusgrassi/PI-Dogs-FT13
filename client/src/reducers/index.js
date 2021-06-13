import { GET_DOGS, PAGINATE_DOGS, STOP_LOADING } from "../actions/index";

const initialState = {
    dogs: [],
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
    if (action.type === PAGINATE_DOGS) {
        return {
            ...state,
            currentPage: action.payload
        }
    }
    if (action.type === STOP_LOADING){
        return {
            ...state,
            loading: false
        }
    }
    return state;
}

export default rootReducer;