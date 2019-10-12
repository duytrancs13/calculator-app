import React, { Component } from 'react';
import './CalculatorKey.scss';
import * as actions from '../../Redux/actions/actions';
import { connect } from 'react-redux';

class CalculatorKey extends Component {

    handleClick(input) {
        switch (input) {
            case '0':
                this.props.onAddZero({ input })
                break;
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.props.onAddNumber({ input })
                break;

            case '●':
                input = '.'
                this.props.onAddDecimal({ input })
                break;
            case 'AC':
                input = ''
                this.props.onClear()
                break;
            case '+':
                this.props.onAdd({ input })
                break;
            case '-':
                this.props.onSubtract({ input })
                break;
            case 'x':
                input = '*'
                this.props.onMultiply({ input })
                break;
            case '÷':
                this.props.onDivide({ input })
                break;
            case '%':
                this.props.onPercent({ input })
                break;
            case '±':
                this.props.onNegative({ input })
                break;
            case '=':
                this.props.onEvaluation({ input })
                break;
            default:
                break;

        }
    }

    render() {
        const { className, value } = this.props
        return (
            <div className={`calculator-key calculator-key--${className}`} onClick={() => this.handleClick(value)}>
                {value}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddNumber: (input) => {
            dispatch(actions.addNumber(input))
        },
        onAddZero: (input) => {
            dispatch(actions.addZero(input))
        },
        onAddDecimal: (input) => {
            dispatch(actions.addDecimal(input))
        },
        onClear: () => {
            dispatch(actions.clear())
        },
        onAdd: (input) => {
            dispatch(actions.add(input))
        },
        onSubtract: (input) => {
            dispatch(actions.subtract(input))
        },
        onMultiply: (input) => {
            dispatch(actions.multiply(input))
        },
        onDivide: (input) => {
            dispatch(actions.divide(input))
        },
        onPercent: (input) => {
            dispatch(actions.percent(input))
        },
        onNegative: (input) => {
            dispatch(actions.negative(input))
        },
        onEvaluation: (input) => {
            dispatch(actions.evaluation(input))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CalculatorKey);