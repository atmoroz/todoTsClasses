import React from "react";

import "./taskForm.sass";

interface IProps {
  addTask: (text: string) => void;
}

interface IStateForm {
  value: string | {};
}

export default class TaskForm extends React.Component<IProps, IStateForm> {
  state = {
    value: ""
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({ value: event.target.value });
  };

  keyPressHandler = (event: React.KeyboardEvent): void => {
    const { addTask } = this.props;
    const { value } = this.state;
    if (event.key === "Enter" && value.length !== 0) {
      addTask(this.state.value);
      this.setState({ value: "" });
    }
  };

  render() {
    const { value } = this.state;

    return (
      <form onSubmit={e => e.preventDefault()}>
        <div className="formWrapper">
          <div className="formInput">
            <label htmlFor="addTask">task</label>
            <input
              id="addTask"
              placeholder="Enter your task"
              type="text"
              value={String(value)}
              onChange={this.handleChange}
              onKeyPress={this.keyPressHandler}
            />
          </div>
        </div>
      </form>
    );
  }
}
