import React from 'react'

class Task extends React.Component {
    render () {
        const { attributes } = this.props;
        
        return (
            <div className="task">
                <h2>{attributes.title}</h2>
                <p>{attributes.description}</p>
                <p>Completed? {attributes.completed.toString()}</p>
            </div>
        )
    }
}

export default Task
