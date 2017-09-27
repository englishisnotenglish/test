import React, {Component} from 'react';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.initState(props);

    this.createTaskForm = this.createTaskForm.bind(this);
  }

  onMouseDown() {
    this.state.isMouseDown = true;
  }

  onMouseMove(e) {
    if(this.state.isMouseDown) {
      this.setState({
        moving: true
      }, () => {
        this.state.moving = false
      });
      console.log(e);
    }
  }

  createMovingShadow() {
    return (
      <div className="tl-shadow" style={{top: '1px', left: '2px'}}>
        you have dragged a task!
      </div>
    )
  }


  onMouseUp() {

  }

  componentDidMount() {
    const events = {
      mousedown: this.onMouseDown.bind(this),
      mouseenter: this.onMouseEnter.bind(this),
      mouseup: this.onMouseUp.bind(this),
      mousemove: this.onMouseMove.bind(this)
    };
    for(let eventName in events) {
      if(eventName === 'mousemove') {
        document.addEventListener(eventName, events[eventName], false);
        continue;
      }
      this.taskLIst.addEventListener(eventName, events[eventName], false);
    }
  }

  initState(props) {
    this.listType = props.taskStatus;
    this.config = {
      canAdd: false,
      canDelete: false
    };
    this.generateConfig();
    this.state = {
      formVisible: false,
      isMouseDown: false,
      entered: false,
      moving: false
    };
    this.initTaskData();
  }

  generateConfig() {
    const config = this.config;
    switch (this.listType) {
      case '1'://unfinished
        config.canAdd = true;
        config.canDelete = true;
        break;
      case '2'://finished
        break;
    }
  }

  initTaskData() {
    this.state.taskData = {
      taskName: '',
      taskDes: '',
      taskLevel: '1'
    }
  }

  //任务栏的列表
  createHeader() {
    const {canAdd} = this.config;
    return (
      <div>
        <a onClick={() => {this.setState({formVisible: true})}}><span>{canAdd ? '+' : null}</span></a>
      </div>
    );
  }

  //创建task提交表单
  createTaskForm() {
    return(
      <div onChange={this.updateFromPostData.bind(this)}>
        <div><span>任务名称</span><input type="text" name="taskName"/></div>
        <div><span>任务描述</span><input type="text" name="taskDes"/></div>
        <div>
          <span>任务等级</span>
          <select name="taskLevel">
            <option value="1" >一般</option>
            <option value="2">中等</option>
            <option value="3">重要</option>
            <option value="4">非常重要</option>
            <option value="5">高于一切</option>
          </select>
        </div>
        <button onClick={this.submitTask.bind(this)}>创建</button>
      </div>
    )
  }

  //更新值
  updateFromPostData(e) {
    const target = e.target;
    this.state['taskData'][target.name] = target.value;
  }

  submitTask() {
    const {addTask} = this.props,
      {taskName, taskDes, taskLevel} = this.state.taskData;
    this.state.formVisible = false;
    this.initTaskData();
    addTask(taskName, taskDes, taskLevel);
  }

  createTaskLIst() {
    const {tasks} = this.props,
      {canDelete} = this.config;
    return <ul className="tl-task-list"  ref={(element) => {this.taskLIst = element}}>
      {tasks.map((task, index) => {
        const {id, level, name, describe} =  task;
        return (
          <li key={id} className={"tl-task"}>
            <span className={"tl-task-level tl-task-level-" + level}>{level}</span>
            <label className="tl-task-content">
              <span className="tl-task-name" href='javascript:;'>{name}:&nbsp;</span>
              <span className="tl-task-des">{describe}</span>
            </label>
            {canDelete ? <a className="tl-task-del" onClick={this.delTask.bind(this)} data-index={index}>删除</a> : null}
          </li>
        )
      })}
    </ul>
  }

  delTask(e) {
    const {deleteTask, tasks} = this.props,
      target = e.target,
      index = target.dataset.index,
      task = tasks[index];
    deleteTask(task.id);
  }

  render() {
    return (
      <div className="tl-task-card">
        {this.createHeader()}
        {this.state.formVisible ? this.createTaskForm() : null}
        {this.createTaskLIst()}
        {this.state.moving ? this.createMovingShadow() : null}
      </div>
    )
  }
}

export  default TaskList;