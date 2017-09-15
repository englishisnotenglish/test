import React, {Component} from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.initState();
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

  //taskStatus: 0 created, 1 finished, 2: unfinished
  createTask(name, describe, level, id) {
    let indexId = 0;
    if(id === undefined || this.ids[id])
      while(this.ids[indexId++]) break;

    this.ids[indexId] = true;
    return {
      id: indexId,
      name,
      describe,
      level,
      status: 0
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
    this.deleteTask(id);
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

  //list: arr, type: string
  createList(list, type) {
    const obj = {};

  }

  render() {
    return <div>


      </div>
  }
}
export default TodoList;