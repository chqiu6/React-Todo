import React from "react";

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state = {
            todoData: ""
        };
    }
    changeHandler = e => {
        console.log("Checking input: ", e.target.value);
        this.setState({
            ...this.state,
            todoData: e.target.value
        });
    };

    formSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state.todoData);
        this.setState({
            ...this.state,
            todoData: ""
        });
    };

    render(){
    return(
        <form onSubmit = {this.formSubmit}>
        <input 
        type = "text"
        name = "todo"
        value = {this.state.todoData}
        onChange = {this.changeHandler}
        />
        <button> Add </button>
        </form>
    )
    }
}

export default TodoForm;