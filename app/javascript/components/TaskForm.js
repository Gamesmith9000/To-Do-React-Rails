import React from 'react'

class TaskForm extends React.Component {
    render () {
        const { closeTaskForm, editingTaskId } = this.props;
        const isNewTask = (editingTaskId === null);

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
