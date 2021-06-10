import { GET_DOGS } from "../actions/index";

const initialState = {
    dogs: []
}

function rootReducer(state = initialState, action){
    if (action.type === GET_DOGS) {
        return {
            ...state,
            dogs: action.payload
        }
    }
    return state;
}

export default rootReducer;