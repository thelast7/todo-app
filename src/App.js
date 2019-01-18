import React, { Component } from 'react';
import Todos from './component/Todos';
import AddTodo from './component/AddTodo';

class App extends Component {
  state = {
    todos: []
  }

  hapusTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos:todos
    })
  }

  tambahTodo = (todo) => {
    todo.id = Math.random()
    let todos = [...this.state.todos, todo]
    this.setState({
      todos:todos
    })
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center">Todo's</h1>
        <Todos todos={this.state.todos} hapusTodo={this.hapusTodo}/>
        <AddTodo tambahTodo={this.tambahTodo}/>
      </div>
    );
  }
}

export default App;
