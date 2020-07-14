import React, { Fragment } from 'react'

class MenuBar extends React.Component {
    render () {
        const { changeTaskSortingStyle, hideCompletedItems, openTaskForm, setHideCompletedItems, taskFormIsOpen, taskSortStyle} = this.props;

        return (
            <div className="menu-bar">
                <span className="brand">
                    <div className="brand__title">To-Do</div>
                    <div className="brand__subtitle">React On Rails</div>
                </span>
                <br/>
                { taskFormIsOpen === false ?
                    <Fragment>
                        <div className="menu-item">
                            <button onClick={() => openTaskForm(null)}>
                                Add To-Do
                            </button>
                        </div>
                        <label className="menu-item">
                            <input
                                type="checkbox"
                                checked={hideCompletedItems}
                                onChange={setHideCompletedItems}
                            />
                            Hide Completed
                        </label>
                        <label className="menu-item">
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

