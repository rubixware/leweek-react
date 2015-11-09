var TodoListJsx = React.createClass({
  displayName: "TodoListJsx",
  getInitialState: function() {
    return {
      todos: ["angular", "dotdot"],
      todoValue: ""
    };
  },
  addTodo: function (event) {
    event.preventDefault();
    var todos = this.state.todos;
    var todoValue = this.state.todoValue;
    todos.push(todoValue);
    this.setState({
      todos: todos,
      todoValue: ""
    });
  },
  removeTodo: function (event) {
    event.preventDefault();
    var todos = this.state.todos;
    todos.pop();
    this.setState({
      todos: todos
    });
  },
  changeTodoValue: function (event) {
    this.setState({
      todoValue: event.target.value
    });
  },
  onKeyPressTodoValue: function (event) {
    if (event.keyCode == 13) {
      this.addTodo(event);
    }
  },
  render: function() {
    var todoNodes = [];
    for (var i = 0; i < this.state.todos.length; i++) {
      todoNodes.push(<li>{this.state.todos[i]}</li>);
    }
    return (
      <div>
        <ol>{ todoNodes }</ol>
        <div style={}>
        <input type="text"
          onChange={this.changeTodoValue}
          onKeyUp={this.onKeyPressTodoValue}
          value={this.state.todoValue}>
        </input>
        <button onClick={this.addTodo}>Agregar nuevo elemento</button>
        <button onClick={this.removeTodo}>Quitar ultimo elemento</button>
        </div>
      </div>
    );
  }

});
