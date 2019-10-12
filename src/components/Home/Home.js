import React, { Component } from 'react';
import './Home.scss';
import Calculator from '../Calculator/Calculator';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="app">
                    <Calculator />
                </div>
            </div>
        );
    }
}

export default Home;