import React, {Component} from 'react';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.initState(props);

    this.createTaskForm = this.createTaskForm.bind(this);
  }

  initState(props) {
    this.listType = props.taskStatus;
    this.config = {
      canAdd: false,
      canDelete: false
    };
    const config = this.config;
    switch (this.listType) {
      case '1'://unfinished
        config.canAdd = true;
        config.canDelete = true;
        break;
      case '2'://finished
        break;
    }

    this.state = {
      formVisible: false,
      taskData: {
        taskName: '',
        taskDes: '',
        taskLevel: ''
      }
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
            <option value="1">一般</option>
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
    this.state['taskData'][target.name] = target.value
  }

  submitTask() {
    const {addTask} = this.props,
      {taskName, taskDes, taskLevel} = this.state.taskData;
    this.state.formVisible = false;
    addTask(taskName, taskDes, taskLevel);
  }


  createTaskLIst() {
    const {tasks, deleteTask} = this.props,
      {canDelete} = this.config;
    return <ul className="tl-task-list">
      {tasks.map((task, index) => {
        const {id, level, name, describe} =  task;
        return (
          <li key={id} className={'tl-task tl-task-level-' + level} data-index={index}>
            <span className="tl-task-level">{level}</span>
            <a className="tl-task-name" href='javascript:;'>{name}</a>
            <span className="tl-task-des">{describe}</span>
            {canDelete ? <span className="tl-task-del" onClick={deleteTask}>删除</span> : null}
          </li>
        )
      })}
    </ul>
  }

  render() {
    return (
      <div className="tl-task-card">
        {this.createHeader()}
        {this.state.formVisible ? this.createTaskForm() : null}
        {this.createTaskLIst()}
      </div>
    )
  }
}

export  default TaskList;