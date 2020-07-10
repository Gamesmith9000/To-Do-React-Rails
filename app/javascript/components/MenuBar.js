import React, { Fragment } from 'react'

class MenuBar extends React.Component {
    render () {
        const { hideCompletedItems, openTaskForm, setHideCompletedItems, taskFormIsOpen} = this.props;

        return (
            <div className="menu-bar">
                MenuBar Component
                <br/>
                { taskFormIsOpen === false ?
                    <Fragment>
                        <button onClick={() => openTaskForm(null)}>
                            Add To-Do
                        </button>
                        <label>
                            <input
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

