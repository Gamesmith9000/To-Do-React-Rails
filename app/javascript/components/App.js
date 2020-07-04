import React from 'react'
import Tasks from './Tasks'
import MenuBar from './MenuBar'
import TaskForm from './TaskForm';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            hideCompletedItems: true,
            taskFormIsOpen: false
        }
    }
    
    setHideCompletedItems = (event) => {
        this.setState({
            hideCompletedItems: event.target.checked
        });
    }

    render () {
        return (
            <div className="app">
                <MenuBar 
                    hideCompletedItems={this.state.hideCompletedItems}
                    setHideCompletedItems={this.setHideCompletedItems} 
                    taskFormIsOpen={this.state.taskFormIsOpen}
                    />

                {this.state.taskFormIsOpen === false ?
                    <Tasks hideCompletedItems={this.state.hideCompletedItems} />
                    :
                    <TaskForm />
                }           
            </div>
        )
    }
}

export default App