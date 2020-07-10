import React from 'react'
import Tasks from './Tasks'
import MenuBar from './MenuBar'
import TaskForm from './TaskForm';


class App extends React.Component {
    constructor() {
        super();
        this.state = {
            editingTaskId: null,
            hideCompletedItems: true,
            taskFormIsOpen: false
        }
    }

    closeTaskForm = () => {
        this.setState({
            editingTaskId: null,
            taskFormIsOpen: false
        });
    }
    
    openTaskForm = (taskId) => {
        this.setState({
            editingTaskId: taskId,
            taskFormIsOpen: true
        });
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
                    openTaskForm={this.openTaskForm}
                    setHideCompletedItems={this.setHideCompletedItems} 
                    taskFormIsOpen={this.state.taskFormIsOpen}
                    />

                {this.state.taskFormIsOpen === false ?
                    <Tasks 
                        hideCompletedItems={this.state.hideCompletedItems} 
                        openTaskForm={this.openTaskForm}
                    />
                    :
                    <TaskForm
                        closeTaskForm={this.closeTaskForm}
                        editingTaskId={this.state.editingTaskId} 
                    />
                }           
            </div>
        )
    }
}

export default App