export default function pageLayout(state={
    scrolling: false,
}, action) {
    switch (action.type){
        case "SCROLL_BEGIN": {
            return {...state, scrolling: action.payload}
        }
    }
    return state
}