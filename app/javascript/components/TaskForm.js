import React from 'react'
import axios from 'axios'
import TaskDeletionPrompt from './TaskDeletionPrompt';

class TaskForm extends React.Component {
    constructor() {
        super();
        this.state = {
            deletionPromptOpen: false,
            title: "",
            description: ""
        };
    }

    componentDidMount () {
        if(this.props.editingTaskId === null) {
            return;
        }
        axios.get(`/api/tasks/${this.props.editingTaskId}.json`)
        .then( res => {
            this.setState({
                title: res.data.data.attributes.title,
                description: res.data.data.attributes.description,
            });
        })
        .catch(err => console.log(err.response));
    }

    closeDeletionPrompt = (didDeleteTask) => {
        this.setState({deletionPromptOpen: false});
        if(didDeleteTask === true) {
            this.props.closeTaskForm();
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault();

        const isExistingTask = (this.props.editingTaskId !== null);
        const { title, description } = this.state;

        const csrfToken = document.querySelector('[name=csrf-token]').textContent;
        axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken;

        if(isExistingTask === true) {
            axios.patch(`/api/tasks/${this.props.editingTaskId}`, { title, description })
            .then (res => {
                console.log(res);
                this.props.closeTaskForm();
            })
            .catch(err => console.log(err.response));
        }
        else {
            axios.post('/api/tasks', { title, description })
            .then (res => {
                console.log(res);
                this.props.closeTaskForm();
            })
            .catch(err => console.log(err.response));
        }
    }

    handleDescriptionChange = (e) => {
        e.preventDefault();
        this.setState({description: e.target.value});
    }

    handleTitleChange = (e) => {
        e.preventDefault();
        this.setState({title: e.target.value});
    }

    openDeletionPrompt = (e) => {
        e.preventDefault();
        this.setState({deletionPromptOpen: true})
    }

    render () {
        const { closeTaskForm, editingTaskId } = this.props;
        const isNewTask = (editingTaskId === null);

        // If a task is being edited and the state of task has not yet been set, 
        //  return and wait for componentDidMount to get the state via Axios
        if(this.state.task === null && isNewTask === false) {
            return <React.Fragment/>
        }

        return (
            <form className="task-form" onSubmit={this.handleFormSubmit}>
                <h2>{isNewTask === true ? "New" : "Edit"} To-Do</h2>
                <label>Title</label>
                <input
                    name="title"
                    type="text"
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                />
                <label>Description</label>
                <input
                    name="description"
                    type="text"
                    value={this.state.description}
                    onChange={this.handleDescriptionChange}
                />
                <button type="submit">
                    {isNewTask === true ? "Create" : "Update"}
                </button>
                
                <button onClick={() => closeTaskForm()}>
                    Cancel
                </button>
                {isNewTask === false && this.state.deletionPromptOpen === false &&
                    <button onClick={this.openDeletionPrompt}>
                        Delete To-Do
                    </button>
                }
                {this.state.deletionPromptOpen === true &&
                    <TaskDeletionPrompt 
                        closeDeletionPrompt={this.closeDeletionPrompt}
                        editingTaskId={this.props.editingTaskId}
                    />
                }
            </form>
        )
    }
}

export default TaskForm
