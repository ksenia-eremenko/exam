
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
type minValueCounterACType = {
    type: 'MIN_VALUE_COUNTER',
    minValue: number
}
type maxValueCounterACType = {
    type: 'MAX_VALUE_COUNTER',
    maxValue: number
}
type ActionCreatorsType = incCounterACType | decCounterACType | resetCounterACType | minValueCounterACType | maxValueCounterACType

export type stateType = {
    value: number,
    maxValue: number,
    minValue: number 
}

let initialState = {
    value: 0,
    maxValue: Number(localStorage.getItem('maxValue')),
    minValue: Number(localStorage.getItem('minValue')) 
};

export const counterReducer = (state: stateType = initialState, action: ActionCreatorsType): stateType => {
    switch (action.type) {
        case 'INC_COUNTER': {
            return { ...state, value: action.value + 1 }
        }
        case 'DEC_COUNTER': {
            return { ...state, value: action.value - 1 }
        }
        case 'RESET_COUNTER': {
            return { ...state, value: state.value = 0 }
        }
        case 'MIN_VALUE_COUNTER': {
            return { ...state, minValue: action.minValue }
        }
        case 'MAX_VALUE_COUNTER': {
            return { ...state, maxValue: action.maxValue }
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
export const minValueCounterAC = (minValue: number): minValueCounterACType => {
    return { type: 'MIN_VALUE_COUNTER', minValue }
}
export const maxValueCounterAC = (maxValue: number): maxValueCounterACType => {
    return { type: 'MAX_VALUE_COUNTER', maxValue }
}