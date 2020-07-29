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
        const { description, title } = this.props;
        return (
            <div className="task-deletion-prompt">
                <h2>Are you sure you want to delete this To-Do?</h2>
                <div className="deletion-property-summary">
                    <div className="deletion-property-pair">
                        <label className="deletion-property-name">Title</label>
                        <label>{title}</label>
                    </div>
                    <div className="deletion-property-pair">
                        <label className="deletion-property-name">Description</label>
                        <label>{description}</label>
                    </div>
                </div>
                <button onClick={this.handleTaskDeletion} className="form-button delete-button">
                    Delete
                </button>
                <button onClick={this.handleCancel} className="form-button">
                    Cancel
                </button>
            </div>
        )
    }
}

export default TaskDeletionPrompt
