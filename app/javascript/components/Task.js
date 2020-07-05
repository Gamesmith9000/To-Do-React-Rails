import React from 'react'

class Task extends React.Component {
    // deletionPromptIsOpen (bool) will live in this component's state
    // It will trigger rendering of the TaskDeletionPromptComponent

    constructor() {
        super();
        this.state = {
            deletionPromptIsOpen: false
        };
    }

    render () {
        const { attributes, id, openTaskForm } = this.props;
        
        return (
            <div className="task">
                <h2>{attributes.title}</h2>
                <p>{attributes.description}</p>
                <p>Completed? {attributes.completed.toString()}</p>
                <button onClick={() => openTaskForm(id)}>
                    Edit
                </button>
            </div>
        )
    }
}

export default Task
