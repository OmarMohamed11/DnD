import ReactDOM from 'react-dom';
import Data from './data'
import React, { Component } from 'react'

export default class App extends Component {

    state=Data;

    render() {
        return ( this.state.columnOrder.map(columnId => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId])
        })
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));