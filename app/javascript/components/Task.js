import React from 'react'

class Task extends React.Component {
    constructor() {
        super();
        this.state = {
            deletionPromptIsOpen: false
        };
    }

    render () {
        const { attributes, id, handleToggleCompleted, openTaskForm } = this.props;
        
        return (
            <div className="task">
                <h2>{attributes.title}</h2>
                <p>Description:</p>
                <p>{attributes.description}</p>
                <p>Created: {attributes.created_at}</p>
                <button onClick={() => openTaskForm(id)}>
                    Edit
                </button>
                <p>Completed:</p>
                <input
                    type="checkbox"
                    defaultChecked={attributes.completed}
                    onChange={() => handleToggleCompleted(id)}
                />
            </div>
        )
    }
}

export default Task
