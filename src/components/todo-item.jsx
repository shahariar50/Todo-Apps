import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusSquare } from "@fortawesome/free-regular-svg-icons";
import { faCheckCircle, faCheck } from "@fortawesome/free-solid-svg-icons";
import { Accordion, Card } from "react-bootstrap";
import "./todo-item.css";

class TodoItem extends Component {
  state = {
    todo: this.props.todo,
    done: this.props.todo.done
  };

  handleDone = () => {
    const val = this.state.done === 1 ? 0 : 1;
    this.setState({ done: val });
  };

  handleButtonClass() {
    let classes = "todo__item_header ";
    classes += this.state.done === 1 && "opacity65";
    return classes;
  }

  render() {
    return (
      <Card>
        <Accordion.Toggle
          className={this.handleButtonClass()}
          as={this.Button}
          variant="link"
          eventKey={"" + this.state.todo.id + ""}
        >
          {this.state.todo.title}
          <FontAwesomeIcon
            icon={faMinusSquare}
            onClick={() => this.props.onRemove(this.props.todo.id)}
          />
          <FontAwesomeIcon
            icon={this.state.done === 1 ? faCheckCircle : faCheck}
            onClick={this.handleDone}
          />
        </Accordion.Toggle>
        <Accordion.Collapse
          eventKey={"" + this.props.todo.id + ""}
          className="todo__item_body"
        >
          <Card.Body>{this.props.todo.description}</Card.Body>
        </Accordion.Collapse>
      </Card>
    );
  }
}

export default TodoItem;
