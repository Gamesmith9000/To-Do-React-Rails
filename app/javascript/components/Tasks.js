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
        .catch(err => console.log(err.response));
    }

    handleToggleCompleted = (taskId) => {
        const taskIndex = this.state.tasks.findIndex((element) => element.id === taskId);
        let tasksData = this.state.tasks;
        const completed = !tasksData[taskIndex].attributes.completed;

        axios.patch(`/api/tasks/${taskId}`, { completed })
        .then (res => {
            console.log(res);
            tasksData[taskIndex].attributes.completed = completed;
            this.setState({tasks: tasksData});

        })
        .catch(err => console.log(err.response));
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

    sortByStyle (tasksData, sortingStyle, reverseSortingOrder) {
        let sortedData = tasksData;

        if(sortingStyle === 'createdAt') {   
            sortedData = tasksData.sort(function(a,b) {
                const aLowercase = a.props.attributes.created_at.toLowerCase();
                const bLowercase = b.props.attributes.created_at.toLowerCase();
                if(aLowercase < bLowercase) {
                    return -1;
                }
                if(aLowercase > bLowercase) {
                    return 1;
                }
                return 0;
            });    
        }
        else if (sortingStyle === 'title') {
            sortedData = tasksData.sort(function(a,b) {
                const aLowercase = a.props.attributes.title.toLowerCase();
                const bLowercase = b.props.attributes.title.toLowerCase();
                if(aLowercase < bLowercase) {
                    return -1;
                }
                if(aLowercase > bLowercase) {
                    return 1;
                }
                return 0;
            });
        }
        
        // if sorting style is 'updatedAt' or an invalid value,
        // keep the sorting as is - this is the default sorting from the database (which is by 'updated_at' value)

        if(reverseSortingOrder === true) {
            return sortedData.reverse();
        }

        return sortedData;
    }

    render () {
        const { hideCompletedItems, reverseTaskSorting, taskSortStyle } = this.props;

        return (
            <div className="tasks">
                <h1 className="tasks-title">To-Do's</h1>
                { this.sortByStyle(this.mapTasks(this.state.tasks, hideCompletedItems), taskSortStyle, reverseTaskSorting) }
            </div>
        )
    }
}

export default Tasks
