import React, { Fragment } from 'react'

class MenuBar extends React.Component {
    constructor() {
        super();
        this.state = {
            optionsMenuIsOpen: false
        };
    }

    handleOptionsMenuToggle = (e) => {
        this.setState({optionsMenuIsOpen: !this.state.optionsMenuIsOpen});
    }

    render () {
        const { changeTaskSortingStyle, hideCompletedItems, openTaskForm, reverseTaskSorting, setHideCompletedItems, setReverseTaskSorting, taskFormIsOpen, taskSortStyle} = this.props;

        return (
            <div className="menu-bar">
                <span className="brand">
                    <div className="brand__title">To-Do</div>
                    <div className="brand__subtitle">React On Rails</div>
                </span>
                { taskFormIsOpen === false ?
                    <Fragment>
                        <div className="menu-item">
                            <button onClick={() => openTaskForm(null)}>
                                Add To-Do
                            </button>
                        </div>
                        <div className="menu-item">
                            <button onClick={this.handleOptionsMenuToggle}>
                                Options
                            </button>
                        </div>
                        { this.state.optionsMenuIsOpen === true &&
                            <div className="options-submenu">
                                <div className="submenu-item">
                                    <input
                                        type="checkbox"
                                        checked={hideCompletedItems}
                                        onChange={setHideCompletedItems}
                                    />
                                    <label>Hide Completed</label>
                                </div>
                                <div className="submenu-item select-item">
                                    <label>Sort by:&nbsp;</label>
                                    <select 
                                        value={taskSortStyle}
                                        onChange={changeTaskSortingStyle}
                                    >
                                        <option value="createdAt">Created</option>
                                        <option value="updatedAt">Updated</option>
                                        <option value="title">Title</option>
                                    </select>
                                </div>
                                <div className="submenu-item">
                                    <input
                                        type="checkbox"
                                        checked={reverseTaskSorting}
                                        onChange={setReverseTaskSorting}
                                    />
                                    <label>Reverse Sorting</label>
                                </div>
                            </div>
                        }
                    </Fragment>
                    :
                    <br/>
                }
            </div>
        )
    }
}

export default MenuBar

