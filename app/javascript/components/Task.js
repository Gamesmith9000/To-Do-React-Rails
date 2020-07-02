import React from 'react'

class Task extends React.Component {
    constructor(props){
        super(props);
        this.props = props;
    }

    render () {
        return (
            <div className="task">
                <h2>{this.props.attributes.title}</h2>
                <p>{this.props.attributes.description}</p>
                <p>Completed? {this.props.attributes.completed.toString()}</p>
            </div>
        )
    }
}

export default Task

