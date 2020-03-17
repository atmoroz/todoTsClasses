import React from "react";
import TaskForm from "../TaskForm/TaskForm";

import { IState, ITasks } from "../../interfaces/interface";
import "./main.sass";
import TasksList from "../TasksList/TasksList";

var uniqid = require("uniqid");

interface IProps {}

const storageTasks = localStorage.getItem("tasks");

export default class Main extends React.Component<IProps, IState> {
  state: IState = {
    tasks: storageTasks ? JSON.parse(storageTasks) : []
  };

  newTask = (text: string) => {
    let newTask: ITasks = {
      id: uniqid(),
      text: text,
      isComplited: false
    };
    this.setState(prev => ({
      tasks: [newTask, ...prev.tasks]
    }));
  };

  onToggle = (id: string) => {
    this.setState(prev => ({
      tasks: prev.tasks.map(task => {
        if (task.id === id) {
          task.isComplited = !task.isComplited;
        }
        return task;
      })
    }));
  };

  onRemove = (id: string) => {
    this.setState(prev => ({
      tasks: prev.tasks.filter(task => task.id !== id)
    }));
  };

  render() {
    const { tasks } = this.state;
    return (
      <>
        <TaskForm addTask={this.newTask} />
        <TasksList
          tasks={tasks}
          onToggle={this.onToggle}
          onRemove={this.onRemove}
        />
      </>
    );
  }
}
