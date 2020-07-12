import React, { Fragment } from 'react'
import axios from 'axios'
import Task from './Task'
import { element } from 'prop-types';

class Tasks extends React.Component {
    constructor(){
        super();
        this.state = {
            tasks: []
        }
    }
    
    componentDidMount () {
        axios.get('/api/tasks.json')
        .then( res => {
            this.setState({tasks: res.data.data})
        })
        .catch(err => console.log(err));
    }

    handleToggleCompleted = (taskId) => {
//      e.preventDefault(); does not appear necessary

        const taskIndex = this.state.tasks.findIndex((element) => element.id === taskId);
        let tasksData = this.state.tasks;
        const completed = !tasksData[taskIndex].attributes.completed;

        axios.patch(`/api/tasks/${taskId}`, { completed })
        .then (res => {
            console.log(res);
            tasksData[taskIndex].attributes.completed = completed;
            this.setState({tasks: tasksData});

        })
        .catch(err => console.log(err));
    }

    mapTasks (tasksData, hideCompletedTasks) {
        const filteredTasks = tasksData.filter(
            function(t) {
                if(!hideCompletedTasks) return true;
                return t.attributes.completed === false;
            }
        );

        return filteredTasks.map(item => {
            return (
                <Task 
                    key={item.id}
                    attributes={item.attributes}
                    handleToggleCompleted={this.handleToggleCompleted}
                    id={item.id}
                    openTaskForm={this.props.openTaskForm}
                />
            )
        });
    }

    sortByStyle (tasksData, sortingStyle) {
        if(sortingStyle === 'createdAt') {
            console.log('Sorting logic has not yet been implemented for this sorting style');
        }
        else if (sortingStyle === 'title') {
            console.log('Sorting logic has not yet been implemented for this sorting style');
        }
        
        // if sorting style is 'updatedAt' or an invalid value,
        // keep the sorting as is - this is the default sorting from the database (which is by 'updated_at' value)
        return tasksData;
    }

    render () {
        const { hideCompletedItems, taskSortStyle } = this.props;

        return (
            <div className="tasks">
                <h2>To-Do's</h2>
                { this.sortByStyle(this.mapTasks(this.state.tasks, hideCompletedItems), taskSortStyle) }
            </div>
        )
    }
}

export default Tasks
