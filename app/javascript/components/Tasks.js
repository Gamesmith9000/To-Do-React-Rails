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
        let filteredTasks = tasksData.filter(
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
                />
            )
        });
    }

    render () {
        const { hideCompletedItems } = this.props;

        return (
            <div className="tasks">
                { this.mapTasks(this.state.tasks, hideCompletedItems) }
            </div>
        )
    }
}

export default Tasks
