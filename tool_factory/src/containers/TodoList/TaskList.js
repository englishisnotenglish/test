import React, {Component} from 'react';
import TaskList from './TaskList';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.initState();
  }

  initState() {
    this.state = {
      //finishedPercentage: 0,
      //succeed: false,
      //failed: false,
      //loading: true
    }
  }

  createTaskLIst() {
    const {tasks} = this.props;
    return <ul>
      {tasks.map((task) => {
        return <li key={task.id} className={'task-' + task.level}>
          <a href='javascript'>{task.name}</a><span>{task.describe}</span>
        </li>
      })}
    </ul>
  }

  render() {
    return <div>
      {this.createTaskLIst()}
    </div>
  }
}

export  default TaskList;