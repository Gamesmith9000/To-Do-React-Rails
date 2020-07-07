import React from 'react'
import axios from 'axios'

class TaskForm extends React.Component {
    constructor() {
        super();
        this.state = {
            task: null
        };
    }

    componentDidMount () {
        if(this.props.editingTaskId === null) {
            return;
        }

        axios.get(`/api/tasks/${this.props.editingTaskId}.json`)
        .then( res => {
            this.setState({task: res.data.data});
        })
        .catch(err => console.log(err));
    }

    render () {
        const { closeTaskForm, editingTaskId } = this.props;
        const isNewTask = (editingTaskId === null);

        console.log(this.state.task);

        return (
            <div className="task-form">
                TaskForm Component
                <button onClick={() => closeTaskForm()}>
                    Cancel
                </button>
                {isNewTask === false &&
                    <button>
                        Delete To-Do
                    </button>
                }
            </div>
        )
    }
}

export default TaskForm
