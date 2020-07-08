import React, { Fragment } from 'react'
import axios from 'axios'

class TaskDeletionPrompt extends React.Component {
    handleCancel = (e) => {
        e.preventDefault();
        this.props.closeDeletionPrompt(false);
    }

    handleTaskDeletion = (e) => {
        e.preventDefault();

        axios.delete(`/api/tasks/${this.props.editingTaskId}`)
        .then (res => console.log(res))
        .catch(err => console.log(err));

        this.props.closeDeletionPrompt(true);
    }

    render () {
        return (
            <div className="task-deletion-prompt">
                TaskDeletionPrompt Component
                <button onClick={this.handleTaskDeletion}>Delete To-Do</button>
                <button onClick={this.handleCancel}>Cancel</button>
            </div>
        )
    }
}

export default TaskDeletionPrompt
