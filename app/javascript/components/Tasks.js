import React, { Fragment } from 'react'
import axios from 'axios'
import MenuBar from './MenuBar'
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
                return t.attributes.completed === true;
            }
        );

        return filteredTasks.map(item => {
            const { hideCompletedTasks } = this.props;
            return (
                <Task 
                    key={item.id}
                    attributes={item.attributes}
                />
            )
        });
    }

    render () {
        return (
            <div className="tasks">
                { this.mapTasks(this.state.tasks, this.props.hideCompletedTasks) }
            </div>
        )
    }
}

export default Tasks
