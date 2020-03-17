import React from "react";

import { ITasks } from "../../interfaces/interface";

import "./tasksList.sass";

interface IPropsTasksList {
  tasks: ITasks[];
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
}

export default class TasksList extends React.Component<IPropsTasksList> {
  onToggleComplited = (id: string) => {
    const { onToggle } = this.props;
    onToggle(id);
  };
  onRemoveTask = (id: string) => {
    const { onRemove } = this.props;
    onRemove(id);
  };
  render() {
    const { tasks } = this.props;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    if (tasks.length === 0) {
      return <p className="center">Список ваших дел пуст</p>;
    }
    return (
      <div className="tasksList">
        {tasks.map(task => {
          const classNameTask: string[] = ["tasksListItem"];
          if (task.isComplited) {
            classNameTask.push("complited");
          }
          return (
            <li className={classNameTask.join(" ")} key={`taskKey${task.id}`}>
              <label>
                <input
                  type="checkbox"
                  checked={task.isComplited}
                  onChange={this.onToggleComplited.bind(null, task.id)}
                />
                <span>{task.text}</span>
                <i
                  className="material-icons red-text"
                  onClick={this.onRemoveTask.bind(null, task.id)}
                >
                  delete
                </i>
              </label>
            </li>
          );
        })}
      </div>
    );
  }
}
