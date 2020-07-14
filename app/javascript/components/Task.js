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
                <input
                    type="checkbox"
                    defaultChecked={attributes.completed}
                    onChange={() => handleToggleCompleted(id)}
                />
                <div className="task-info">
                    <h1>{attributes.title}</h1>
                    <p>{attributes.description}</p>
                    <p>Created: {attributes.created_at}</p>
                    <button onClick={() => openTaskForm(id)}>
                        Edit
                    </button>
                </div>
            </div>
        )
    }
}

export default Task
