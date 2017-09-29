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

  componentDidMount() {
    this.bindContainerEvent();
  }

  bindEvent(target, event, fn, capture = false) {
    target.addEventListener(event, fn, capture);
  }

  bindContainerEvent() {
    const events = {
      mousedown: this.onMouseDown.bind(this),
      mouseenter: this.onMouseEnter.bind(this),
      mouseup: this.onMouseUp.bind(this),
      mousemove: this.onMouseMove.bind(this)
    };
    this.containers.forEach((target) => {
      console.log(target);
      for(let eventName in events) {
        if(eventName === 'mousemove' || eventName === 'mouseup') {
          this.bindEvent(document, eventName, events[eventName]);
          continue;
        }
        this.bindEvent(target, eventName, events[eventName]);
      }
    });
  }

  onMouseDown() {
    this.state.isMouseDown = true;
  }

  onMouseMove(e) {
    //console.log(e);
    if(this.state.isMouseDown) {
      this.position = {
        x: e.x,
        y: e.y
      };

      this.setState({
        moving: true
      }, () => {
        this.state.moving = false
      });
    }
  }

  onMouseEnter() {
    if(this.state.isMouseDown)
      this.state.entered = true;
  }

  onMouseUp() {
    if(this.state.entered)
      console.log('you have drag a obj to another container');
    this.initDragState();
  }

  createMovingShadow() {
    const {x, y} = this.position;
    return (
      <div className="tl-shadow" style={{top: y, left: x}}>
        you have dragged a task!
      </div>
    )
  }

  initState() {
    this.taskList = new Map();
    this.ids = {}; //记录task生成的数量
    this.containers = new Set();
    this.position = {
      x: 0,
      y: 0
    };

    this.state = {
      finishedPercentage: 0,
      succeed: false,
      failed: false,
      loading: true
    };
    this.initDragState();
  }

  initDragState() {
    this.state = {
      isMouseDown: false,
      entered: false,
      moving: false
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
                  taskStatus={taskStatus} tasks={obj[taskStatus]} ref={(element) => {element ? this.containers.add(element.taskList) : null}}
        />
      );
    }

    return tasks;
  }

  render() {
    return (
      <div>
        {this.createList()}
        {this.state.moving ? this.createMovingShadow() : null}
      </div>
      )
  }
}
export default TodoList;