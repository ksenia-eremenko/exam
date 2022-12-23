
type incCounterACType = {
    type: 'INC_COUNTER',
    value: number
}
type decCounterACType = {
    type: 'DEC_COUNTER',
    value: number
}
type resetCounterACType = {
    type: 'RESET_COUNTER',
    value: number
}

type ActionCreatorsType = incCounterACType | decCounterACType | resetCounterACType

let initialState = {};

export const counterReducer = (state = initialState, action: ActionCreatorsType) => {
    switch (action.type) {
        case 'INC_COUNTER': {
            console.log(action.value + 1);
            
            return { ...state, value: action.value + 1 }
        }
        case 'DEC_COUNTER': {
            return { ...state, value: action.value - 1 }
        }
        case 'RESET_COUNTER': {
            return { ...state, value: action.value = 0 }
        }
        default:
            return state;
    }
}

export const incCounterAC = (value: number): incCounterACType => {
    return { type: 'INC_COUNTER', value }
}
export const decCounterAC = (value: number): decCounterACType => {
    return { type: 'DEC_COUNTER', value }
}
export const resetCounterAC = (value: number): resetCounterACType => {
    return { type: 'RESET_COUNTER', value }
}