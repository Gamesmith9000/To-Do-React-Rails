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
        .then (res => {
            console.log(res);
            this.props.closeDeletionPrompt(true);
        })
        .catch(err => console.log(err.response));

        
    }

    render () {
        return (
            <div className="task-deletion-prompt">
                <h2>Are you sure you want to delete this task?</h2>
                <button onClick={this.handleTaskDeletion}>Delete</button>
                <button onClick={this.handleCancel}>Cancel</button>
            </div>
        )
    }
}

export default TaskDeletionPrompt
