import React, {Component} from 'react';
import TaskList from './TaskList';
import './todo_list.less';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.initState();

    this.createTask = this.createTask.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  initState() {
    this.taskList = new Map();
    this.ids = {}; //记录task生成的数量

    this.state = {
      finishedPercentage: 0,
      succeed: false,
      failed: false,
      loading: true
    }
  }

  //taskStatus: 1 finished, 2: unfinished
  createTask(name, describe, level, id) {
    let indexId = 0;
    if(id === undefined)
      while(this.ids[indexId + '']) indexId++;

    this.ids[indexId] = true;
    return {
      id: indexId,
      name,
      describe,
      level,
      status: 1
    }
  }

  addTask(name, describe, level, id) {
    const newTask = this.createTask(name, describe, level, id);
    this.taskList.set(newTask.id, newTask);
    this.setState({
      success: true
    });
  }

  deleteTask(id) {
    this.taskList.delete(id);
    delete this.ids[id];
    this.setState({
      success: true
    });
  }

  //taskId:string, statusCode: string
  changeTaskStatus(taskId, statusCode) {
    const task = this.taskList.get(taskId);
    if(!task) {
      throw 'unknown taskId please check the id if exist';
    }
    task.status = statusCode;
    this.setState({
      succeed: true
    });
  }

  //创建LIst
  createList() {
    const obj = {
      1: [],
      2: []
    },
      tasks = [];
    this.taskList.forEach(task => {
      const taskStatus = task.status;
      if(!obj[taskStatus]) obj[taskStatus] = [];
      obj[taskStatus].push(task);
    });

    for(let taskStatus in obj) {
      tasks.push(
        <TaskList key={taskStatus} addTask={this.addTask} deleteTask={this.deleteTask}
                  taskStatus={taskStatus} tasks={obj[taskStatus]}
        />
      );
    }

    return tasks;
  }

  render() {
    return (
      <div>
        {this.createList()}
      </div>
      )
  }
}
export default TodoList;