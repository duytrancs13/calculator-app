import * as actionTypes from '../constant/ActionTypes';

export const addNumber = (input) => {
    return {
        type: actionTypes.ADD_NUMBER,
        input
    }
}

export const addZero = (input) => {
    return {
        type: actionTypes.ADD_ZERO,
        input
    }
}

export const addDecimal = (input) => {
    return {
        type: actionTypes.ADD_DECIMAL,
        input
    }
}

export const clear = () => {
    return {
        type: actionTypes.CLEAR
    }
}

export const add = (input) => {
    return {
        type: actionTypes.ADD,
        input
    }
}

export const subtract = (input) => {
    return {
        type: actionTypes.SUBTRACT,
        input
    }
}
export const multiply = (input) => {
    return {
        type: actionTypes.MULTIPLY,
        input
    }
}

export const divide = (input) => {
    return {
        type: actionTypes.DIVIDE,
        input
    }
}

export const percent = (input) => {
    return {
        type: actionTypes.PERCENT,
        input
    }
}
export const negative = (input) => {
    return {
        type: actionTypes.NEGATIVE,
        input
    }
}

export const evaluation = (input) => {
    return {
        type: actionTypes.EVALUATION,
        input
    }
}
