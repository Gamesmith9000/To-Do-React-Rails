import React, { Fragment } from 'react'

class MenuBar extends React.Component {
    render () {
        const { hideCompletedItems, setHideCompletedItems, taskFormIsOpen} = this.props;

        return (
            <div className="menu-bar">
                MenuBar Component
                <br/>
                { taskFormIsOpen === false ?
                    <Fragment>
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
                    </Fragment>
                    :
                    <br/>
                }
            </div>
        )
    }
}

export default MenuBar

