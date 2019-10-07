export function userScrollStart(){
    return {
        type: "SCROLL_BEGIN",
        payload: true
    }
}
export function userScrollFinish(){
    return {
        type: "SCROLL_END",
        payload: false
    }
}
export function userPageNumberIncrease(){
    return {
        type: "PAGE_NUMBER_INCREASE",
        payload: 1
    }
}
export function userPageNumberDecrease(){
    return {
        type: "PAGE_NUMBER_DECREASE",
        payload: 1
    }
}