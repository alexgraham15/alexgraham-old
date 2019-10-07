export default function reducer(state={
    position: 0,
}, action) {
    switch (action.type){
        case "PAGE_NUMBER_INCREASE": {
            return {...state, position: action.payload}
        }
        case "PAGE_NUMBER_DECREASE": {
            return {...state, position: action.payload}
        }
    }
    return state
}