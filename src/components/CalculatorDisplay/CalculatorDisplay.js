import React, { Component } from 'react';
import './CalculatorDisplay.scss';
import { connect } from 'react-redux';

class CalculatorDisplay extends Component {
    render() {
        let { input } = this.props.data
        if (input.toString().length > 11) {
            input = input.toString().substring(0, 11)
        }
        return (
            <div className="calculator-display">
                <span className="calculator-display__result">{input}</span>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.data
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onHandleClick: (input) => {
//             dispatch(actions.handleClick(input))
//         }
//     }
// }

export default connect(mapStateToProps, null)(CalculatorDisplay);