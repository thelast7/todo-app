import React, { Component } from 'react';

class App extends Component {
  state = {
    todos: [
      {id:1, content:'perbaiki isue di gitlab'},
      {id:2, content:'laporan'}
    ]
  }
  render() {
    return (
      <div className="todo-app container">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
