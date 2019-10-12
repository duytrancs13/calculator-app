import * as actionTypes from '../constant/ActionTypes'
// +33677078278

const initState = {
    input: '',
    previousNumber: '',
    currentNumber: '',
    operator: ''
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.ADD_NUMBER:
            if (state.input === '') {
                state = Object.assign({}, state, action.input)
            } else {
                if (state.previousNumber === '') {
                    action.input.input = state.input + action.input.input
                    state = Object.assign({}, state, action.input)
                } else {
                    // if(state.input.indexOf('.') >= 0) {
                    //     state.input = state.input + action.input.input
                    // } else {
                    //     state = Object.assign({}, state, state)
                    // }
                    state = Object.assign({}, state, action.input)
                }
            }
            break;

        case actionTypes.ADD_ZERO:
            if (state.input !== '' && state.operator !== '=') {
                action.input.input = state.input + action.input.input
                state = Object.assign({}, state, action.input)
            } else {
                state = Object.assign({}, state, action.input)
            } 
            break;
        case actionTypes.ADD_DECIMAL:
            if (state.input.indexOf('.') === -1) {
                action.input.input = state.input + action.input.input
                state = Object.assign({}, state, action.input)
            }
            break;
        case actionTypes.CLEAR:
            let ptem = {
                input: '',
                previousNumber: '',
                currentNumber: '',
                operator: ''
            }
            state = Object.assign({}, state, ptem)
            break;
        case actionTypes.ADD:
        case actionTypes.SUBTRACT:
        case actionTypes.MULTIPLY:
        case actionTypes.DIVIDE:
            if (state.previousNumber === '') {
                let ptem = {
                    previousNumber: state.input,
                    operator: action.input.input
                }
                state = Object.assign({}, state, ptem)
            } else {
                if (state.operator !== '=') {
                    if (action.type === actionTypes.ADD) {
                        state.input = parseInt(state.previousNumber) + parseInt(state.input)
                    } else if (action.type === actionTypes.SUBTRACT) {
                        state.input = parseInt(state.previousNumber) - parseInt(state.input)
                    } else if (action.type === actionTypes.MULTIPLY) {
                        state.input = parseInt(state.previousNumber) * parseInt(state.input)
                    } else if (action.type === actionTypes.DIVIDE) {
                        state.input = parseFloat(parseInt(state.previousNumber) / parseInt(state.currentNumber))
                    }
                    state.previousNumber = state.input
                    state = Object.assign({}, state, state)
                } else {
                    state.previousNumber = state.input
                    state.operator = action.input.input
                    state = Object.assign({}, state, state)
                }
            }
            break;
        case actionTypes.PERCENT:
            state.input = parseFloat(state.input / 100)
            state = Object.assign({}, state, state)
            break;
        case actionTypes.NEGATIVE:
            if (state.input >= 0) {
                state.input = -parseFloat(state.input)
            } else {
                state.input = parseFloat(state.input) * (-1)
            }
            state = Object.assign({}, state, state)
            break;
        case actionTypes.EVALUATION:
            state.currentNumber = state.input
            if (state.operator === '+') {
                state.input = parseFloat(state.previousNumber) + parseFloat(state.currentNumber)
            } else if (state.operator === '-') {
                state.input = parseFloat(state.previousNumber) - parseFloat(state.currentNumber)
            } else if (state.operator === '*') {
                state.input = parseFloat(state.previousNumber) * parseFloat(state.currentNumber)
            } else if (state.operator === '÷') {
                state.input = parseFloat(parseFloat(state.previousNumber) / parseFloat(state.currentNumber))
            }
            state.operator = '='
            state = Object.assign({}, state, state)

            break;
        default:
            return state
    }
    return state
}


export default reducer;