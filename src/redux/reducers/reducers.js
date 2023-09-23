import {ADD_TEXT, DECREMENT, INCREMENT} from "../actions/actions.js";

const InitialState={
    counter: 0,
    text:[]
}
const reducers =(state = InitialState, action)=> {
    switch (action.type) {
        case INCREMENT:
            return {...state, counter: state.counter + 1}

        case DECREMENT:
            return {...state, counter: state.counter - 1}


        case ADD_TEXT:
            return {
                ...state,
                text: [...state.text, action.payload]
            }
        default:
            return state
    }

}

export default reducers