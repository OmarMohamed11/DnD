import React from 'react';
import ReactDOM from 'react-dom';
import Data from './data'
import React, { Component } from 'react'

export default class App extends Component {

    state=Data;

    render() {
        return (
            <div>
                <h1></h1>
                
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));