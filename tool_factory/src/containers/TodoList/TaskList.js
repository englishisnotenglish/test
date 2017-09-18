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
      case '1'://finished
        break;
      case '2'://unfinished
        config.canAdd = true;
        config.canDelete = true;
        break;
    }

    this.state = {
      formVisible: false
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

  createTaskForm() {
    const {addTask} = this.props;
    return(
      <div>
        <div><span>任务名称</span><input type="text"/></div>
        <div><span>任务描述</span><input type="text"/></div>
        <div>
          <span>任务等级</span>
          <select>
            <option value="1">一般</option>
            <option value="2">中等</option>
            <option value="3">重要</option>
            <option value="4">非常重要</option>
            <option value="5">高于一切</option>
          </select>
        </div>
        <button onClick={addTask}>创建</button>
      </div>
    )
  }

  createTaskLIst() {
    const {tasks, deleteTask} = this.props,
      {canDelete} = this.config;
    return <ul>
      {tasks.map(task => {
        return <li key={task.id} className={'task-' + task.level} onClick={canDelete ? deleteTask : null}>
          <a href='javascript:;'>{task.name}</a><span>{task.describe}</span>
        </li>
      })}
    </ul>
  }

  render() {
    return (
      <div>
        {this.createHeader()}
        {this.state.formVisible ? this.createTaskForm() : null}
        {this.createTaskLIst()}
      </div>
    )
  }
}

export  default TaskList;