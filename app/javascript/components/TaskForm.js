import React, { Fragment } from 'react'

class TaskForm extends React.Component {
    render () {
        const { closeTaskForm, editingTaskId } = this.props;

        return (
            // If editingTaskId is null, then you are creating a new task
            // otherwise, you are editing task with matching ID
            <div className="task-form">
                TaskForm Component
                <button onClick={() => closeTaskForm()}>
                    Cancel
                </button>
            </div>
        )
    }
}

export default TaskForm
