import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./components/Todo.css";

const todoData = [
{
  task:"Sleep",
  id: 1,
  completed: false
},
{
  task: "Eat",
  id: 2,
  completed: true
}
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
      todoData
    };
  }
  //update our state
  toggleTodo = todoId => {
    console.log("toggleTodo check :", todoId);
    this.setState({
      //find item in todoData array, and toggle it to completed
      todoData: this.state.todoData.map(todo => {
        if(todoId === todo.id){
          return {
            //returns item with completed toggled
            ...todo,
            completed:!todo.completed
          };
        }
        return todo;
      })
    })
  }

  //add a new todo entry
  addTodo = post => {
    const newTodo = {
      name: post,
      id: Date.now(),
      completed:false
    };
    this.setState({
      ...this.state, 
      todoData:[...this.state.todoData, newTodo]
    });
  };
  
  //completed todos
  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      ...this.state, 
      todoData:this.state.todoData.filter((item) => !item.completed)
    });
  };
  render() {
    return (
      <div className = "App">
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTodo = {this.addTodo}/>
        <TodoList
        toggleTodo = {this.toggleTodo}
        todos = {this.state.todoData}
        clearTodo = {this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
