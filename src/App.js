import React from "react";
import Form from "./Form/Form";
import Todos from "./Todos/Todos";
import { Container } from "react-bootstrap";

class App extends React.Component {
  state = {
    todos: [
      { id: 1, content: 'buy some milk'},
      {id: 2, content:'play a game'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({todos})
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  }
  render(){
    return (
      <Container className="my-5">
        <header className="col-12 col-md-6">
            <h1 className="text-primary my-3">Todo List</h1>
        </header>
        <div className="col-12 col-md-6">
          <Form addTodo={this.addTodo}/>
        </div>
        <div className="col-12 col-md-6 mt-3">
          { this.state.todos.length ? 
          (this.state.todos.map(todo => <Todos todo={todo}  key={todo.id} deleteTodo={this.deleteTodo}/>)) :
           (<p className="list-group-item text-center">No todo's left for today</p>) }
        </div>
       
      </Container>
    );
  }
}

export default App;
