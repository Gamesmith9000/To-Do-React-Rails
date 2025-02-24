import React from 'react'
import axios from 'axios'
import TaskDeletionPrompt from './TaskDeletionPrompt';

class TaskForm extends React.Component {
    constructor() {
        super();
        this.state = {
            deletionPromptOpen: false,
            title: "",
            description: "",
            originalTitle: "",
            originalDescription: "",
            errorData: null
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
                originalTitle: res.data.data.attributes.title,
                originalDescription: res.data.data.attributes.description,
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

    generateErrorDisplay = (propertyName) => {
        return this.state.errorData !== null && this.state.errorData.hasOwnProperty(propertyName) &&
        <div className={'form-error'}>
            {'The ' + propertyName + " " + this.state.errorData[propertyName].join(' and ') + '.'}
        </div>
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
            .catch(err => this.setState({errorData: err.response.data.error}));
        }
        else {
            axios.post('/api/tasks', { title, description })
            .then (res => {
                console.log(res);
                this.props.closeTaskForm();
            })
            .catch(err => this.setState({errorData: err.response.data.error}));
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
            this.state.deletionPromptOpen === false
                ? <form className="task-form" onSubmit={this.handleFormSubmit}>
                    <h2>{(isNewTask === true ? "New" : "Edit") + " To-Do"}</h2>
                    <div className="label-input-pair">
                    <label>Title</label>
                        <input
                            name="title"
                            type="text"
                            value={this.state.title}
                            onChange={this.handleTitleChange}
                        />
                    </div>
                    {this.generateErrorDisplay('title')}
                    <div className="label-input-pair">
                    <label>Description</label>
                        <textarea
                            name="description"
                            type="text"
                            value={this.state.description}
                            onChange={this.handleDescriptionChange}
                        />
                    </div>
                    {this.generateErrorDisplay('description')}
                    <button type="submit" className="form-button complete-button">
                        {isNewTask === true ? "Create" : "Update"}
                    </button>
                    <button onClick={() => closeTaskForm()} className="form-button">
                        Cancel
                    </button>
                    {isNewTask === false &&
                        <button onClick={this.openDeletionPrompt} className="form-button delete-button">
                            Delete
                        </button>
                    }
                </form>
                : <TaskDeletionPrompt 
                    closeDeletionPrompt={this.closeDeletionPrompt}
                    editingTaskId={this.props.editingTaskId}
                    description={this.state.originalDescription}
                    title={this.state.originalTitle}
                />
        )
    }
}

export default TaskForm
