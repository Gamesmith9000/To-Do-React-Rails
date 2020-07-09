import React, { Fragment } from 'react'
import axios from 'axios'
import Task from './Task'

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
                    id={item.id}
                    openTaskForm={this.props.openTaskForm}
                />
            )
        });
    }

    render () {
        const { hideCompletedItems } = this.props;

        return (
            <div className="tasks">
                <h2>To-Do's</h2>
                { this.mapTasks(this.state.tasks, hideCompletedItems) }
            </div>
        )
    }
}

export default Tasks
