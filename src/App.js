import React from 'react';
import './App.css';
import AppendsList from './AppendsList';

class App extends React.Component {
  state = {
    listItems: ["this", "andThis"]
  };
  render() {
    return (
      <label>
        <AppendsList addNewTask={this.addNewTask} />
        <ToDoList listItems={this.state.listItems} />
      </label>)
  }

  addNewTask = (task) => {
    this.setState({ listItems: [...this.state.listItems, task] })
  };
}
const ToDoList = props => {
  return (
    <ul>
      {
        props.listItems.map((listItem) => {
          return <li key={listItem}>
            <p>
              {listItem}
            </p>
            <button>delete</button>
          </li>
        })
      }
    </ul>
  )
};


export default App;
