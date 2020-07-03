import React from 'react'

class MenuBar extends React.Component {
    constructor(props){
        super(props);
    }

    handleToggleChange = (event) => {
        this.props.setHideCompletedItems(event);
    }

    render () {
        return (
            <div className="menu-bar">
                MenuBar Component
                <br/>
                <button>Add To-Do</button>
                <label>
                    <input
                        name="name"
                        type="checkbox"
                        defaultChecked={this.props.hideCompletedTodos} // Note use of defaultChecked over checked
                        onChange={this.props.setHideCompletedItems}
                    />
                    Hide Completed
                </label>

            </div>
        )
    }
}

export default MenuBar

