import React, { Fragment } from 'react'

class MenuBar extends React.Component {
    render () {
        const { changeTaskSortingStyle, hideCompletedItems, openTaskForm, setHideCompletedItems, taskFormIsOpen, taskSortStyle} = this.props;

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
                                checked={hideCompletedItems}
                                onChange={setHideCompletedItems}
                            />
                            Hide Completed
                        </label>
                        <label>
                            Sort by:
                            <select 
                                value={taskSortStyle}
                                onChange={changeTaskSortingStyle}
                            >
                                <option value="createdAt">When Created</option>
                                <option value="updatedAt">Last Updated</option>
                                <option value="title">Title</option>
                            </select>
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

