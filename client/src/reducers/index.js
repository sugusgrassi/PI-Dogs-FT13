import { GET_DOGS, PAGINATE_DOGS } from "../actions/index";

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
    return state;
}

export default rootReducer;