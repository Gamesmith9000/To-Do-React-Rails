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

    render () {
        return (
            <div className="tasks">
                {
                    this.state.tasks.map(item => {
                        return (
                            <Task 
                                key={item.id}
                                attributes={item.attributes}
                            />
                        )
                    })
                }
            </div>
        )
    }
}

export default Tasks
