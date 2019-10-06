export default function reducer(state={
    pageLocation: false,
}, action) {
    switch (action.type){
        case "PAGE_LOCATION": {
            return {...state, pageLocation: true}
        }
    }
    return state
}