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
            reverseTaskSorting: false,
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

    setReverseTaskSorting = (event) => {
        window.localStorage.setItem('reverseTaskSorting', event.target.checked);
        this.setState({reverseTaskSorting: event.target.checked});
    }

    componentDidMount () {
        let hideCompleted = window.localStorage.getItem('hideCompletedItems');
        let reverseSort = window.localStorage.getItem('reverseTaskSorting');
        let sortStyle = window.localStorage.getItem('taskSortStyle');

        if(hideCompleted === null) {
            hideCompleted = 'true';
            window.localStorage.setItem('hideCompletedItems', hideCompleted);
        }
        if(reverseSort === null) {
            reverseSort = 'false';
            window.localStorage.setItem('reverseTaskSorting', 'false');

        }
        if(sortStyle === null) {
            sortStyle = 'createdAt';
            window.localStorage.setItem('taskSortStyle', sortStyle);
        }

        const hideCompletedItemsBoolValue = (hideCompleted === 'true');
        const reverseSortingBoolValue = (reverseSort === 'true');

        this.setState ({
            hideCompletedItems: hideCompletedItemsBoolValue,
            reverseTaskSorting: reverseSortingBoolValue,
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
                    reverseTaskSorting={this.state.reverseTaskSorting}
                    setHideCompletedItems={this.setHideCompletedItems} 
                    setReverseTaskSorting={this.setReverseTaskSorting}
                    taskFormIsOpen={this.state.taskFormIsOpen}
                    taskSortStyle={this.state.taskSortStyle}
                    />

                {this.state.taskFormIsOpen === false ?
                    <Tasks 
                        hideCompletedItems={this.state.hideCompletedItems} 
                        openTaskForm={this.openTaskForm}
                        reverseTaskSorting={this.state.reverseTaskSorting}
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