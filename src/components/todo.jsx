import React, { Component } from "react";
import TodoItem from "./todo-item";
import { Accordion } from "react-bootstrap";

class Todo extends Component {
  state = {
    todo: [
      {
        id: 1,
        title: "Hello world",
        description:
          "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
        done: 1
      },
      {
        id: 2,
        title: "Second Task",
        description:
          "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.",
        done: 0
      },
      {
        id: 3,
        title: "Third Task",
        description:
          "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.",
        done: 0
      },
      {
        id: 4,
        title: "Fourth Task",
        description:
          "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.",
        done: 0
      }
    ]
  };

  handleRemove = todoId => {
    const todo = this.state.todo.filter(todo => todo.id !== todoId);
    this.setState({ todo });
  };

  handleAdd = even => {
    even.preventDefault();
    const title = even.target.title.value;
    const description = even.target.description.value;

    const todo = [...this.state.todo];
    const length = this.state.todo.length;
    if (title != "" && description != "") {
      todo[length] = {
        id: length + 1,
        title: title,
        description: description,
        done: 0
      };
      this.setState({ todo });
      even.target.title.value = "";
      even.target.description.value = "";
    }
  };

  render() {
    return (
      <section className="todo">
        <h1 className="todo__header">Todo</h1>
        <Accordion defaultActiveKey="1">
          {this.state.todo.map(todo => (
            <TodoItem key={todo.id} todo={todo} onRemove={this.handleRemove} />
          ))}
        </Accordion>
        <form className="todo__add" onSubmit={this.handleAdd}>
          <input
            type="text"
            name="title"
            placeholder="Add title here"
            id="addTitle"
          />
          <textarea
            rows="4"
            name="description"
            placeholder="Add the description"
          ></textarea>
          <button className="btn btn-primary" type="submit">
            Add Task
          </button>
        </form>
      </section>
    );
  }
}

export default Todo;
