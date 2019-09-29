import React, { Component } from 'react'

import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import TodoDeleteItem from './TodoDeleteItem'

import moment from 'moment'

export default class TodoItem extends Component{

  changeStatus = (event) => {
    this.props.changeStatus(this.props.todoItem.id);
  }

  render(){

    return(
      <ListItem button key={this.props.todoItem.id}>
        <ListItemText
          onClick={((event) => this.changeStatus(event))}
          primary=<span style={this.props.todoItem.done===true ? {textDecoration: 'line-through'} : {}}>{this.props.todoItem.text}</span>
          secondary={moment(this.props.todoItem.date).fromNow()}
        />
        <TodoDeleteItem {...this.props}/>
      </ListItem>
    );
  }
}
