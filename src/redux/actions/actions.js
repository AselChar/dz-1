export const  INCREMENT = "INCREMENT"
export const  DECREMENT = "DECREMENT"
export const ADD_TEXT = "ADD_TEXT"

export const addText = (text)=>({
    type: ADD_TEXT,
    payload: text
})

export const increment =()=> ({
    type: INCREMENT
})
export const decrement =()=> ({
    type: DECREMENT
})
