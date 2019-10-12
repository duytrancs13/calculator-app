import React, { Component } from 'react';
import './Calculator.scss';
import CalculatorDisplay from '../CalculatorDisplay/CalculatorDisplay';
import CalculatorKey from '../CalculatorKey/CalculatorKey';


class Calculator extends Component {
    render() {
        return (
            <div className="calculator">
                <CalculatorDisplay />
                <div className="calculator__keypad">
                    <div className="calculator__keypad__input-keys">
                        <div className="calculator__keypad__input-keys__function-keys">
                            <CalculatorKey className={'function-keys'} value={'AC'} />
                            <CalculatorKey className={'function-keys'} value={'±'} />
                            <CalculatorKey className={'function-keys'} value={'%'} />
                        </div>
                    </div>
                    <div className="calculator__keypad__digit-keys">
                        <CalculatorKey className={'key-0'} value={'0'} />
                        {/* ● */}
                        <CalculatorKey className={'key-dot'} value={'●'} />
                        <CalculatorKey className={'key-1-9'} value={'1'} />
                        <CalculatorKey className={'key-1-9'} value={'2'} />
                        <CalculatorKey className={'key-1-9'} value={'3'} />
                        <CalculatorKey className={'key-1-9'} value={'4'} />
                        <CalculatorKey className={'key-1-9'} value={'5'} />
                        <CalculatorKey className={'key-1-9'} value={'6'} />
                        <CalculatorKey className={'key-1-9'} value={'7'} />
                        <CalculatorKey className={'key-1-9'} value={'8'} />
                        <CalculatorKey className={'key-1-9'} value={'9'} />
                    </div>
                </div>
                <div className="calculator__operator-keys">
                    <CalculatorKey className={'operator-keys'} value={'÷'} />
                    <CalculatorKey className={'operator-keys'} value={'x'} />
                    <CalculatorKey className={'operator-keys'} value={'-'} />
                    <CalculatorKey className={'operator-keys'} value={'+'} />
                    <CalculatorKey className={'operator-keys'} value={'='} />
                </div>
            </div>
        );
    }
}

export default Calculator;