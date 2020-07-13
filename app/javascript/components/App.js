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
            taskFormIsOpen: false,
            taskSortStyle: 'createdAt'
        }
    }

    changeTaskSortingStyle = (e) => {
        window.localStorage.setItem('taskSortStyle', e.target.value);
        this.setState({taskSortStyle: e.target.value});
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
        window.localStorage.setItem('hideCompletedItems', event.target.checked);
        this.setState({hideCompletedItems: event.target.checked});
    }

    componentDidMount () {
        let hideCompleted = window.localStorage.getItem('hideCompletedItems');
        let sortStyle = window.localStorage.getItem('taskSortStyle');

        if(hideCompleted === null) {
            window.localStorage.setItem('hideCompletedItems', 'true');
            hideCompleted = 'true';
        }
        if(sortStyle === null) {
            window.localStorage.setItem('taskSortStyle', 'createdAt');
            sortStyle = 'createdAt';
        }

        const hideCompletedItemsBoolValue = (hideCompleted === 'true');

        this.setState ({
            hideCompletedItems: hideCompletedItemsBoolValue,
            taskSortStyle: sortStyle
        });
    }

    render () {
        return (
            <div className="app">
                <MenuBar 
                    changeTaskSortingStyle = {this.changeTaskSortingStyle}
                    hideCompletedItems={this.state.hideCompletedItems}
                    openTaskForm={this.openTaskForm}
                    setHideCompletedItems={this.setHideCompletedItems} 
                    taskFormIsOpen={this.state.taskFormIsOpen}
                    taskSortStyle={this.state.taskSortStyle}
                    />

                {this.state.taskFormIsOpen === false ?
                    <Tasks 
                        hideCompletedItems={this.state.hideCompletedItems} 
                        openTaskForm={this.openTaskForm}
                        taskSortStyle={this.state.taskSortStyle}
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