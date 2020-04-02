import React from 'react';

class AppendsList extends React.Component {
    state = {
        task: ''
    }
    render() {
        return (
            <form onClick={this.handleSubmit}>
                <label>add task:</label>
                <input type="text" onChange={(event) => { this.handleChange(event.target.value) }} value={this.state.task} ></input>
                <button>add</button>
            </form>
        );
    }
    handleChange = (task) => {
        this.setState({ task: task })
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addNewTask(this.state.task)
        this.setState({ task: ""});
    }
}

export default AppendsList;