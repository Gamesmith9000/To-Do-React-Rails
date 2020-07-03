import React from 'react'

class MenuBar extends React.Component {
    render () {
        const { hideCompletedItems, setHideCompletedItems} = this.props;

        return (
            <div className="menu-bar">
                MenuBar Component
                <br/>
                <button>Add To-Do</button>
                <label>
                    <input
                        name="name"
                        type="checkbox"
                        defaultChecked={hideCompletedItems} // Note use of defaultChecked over checked
                        onChange={setHideCompletedItems}
                    />
                    Hide Completed
                </label>

            </div>
        )
    }
}

export default MenuBar

