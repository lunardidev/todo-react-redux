import React, { Component } from 'react'
import List from '@material-ui/core/List';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import AlarmOn from '@material-ui/icons/AlarmOn';

import TodoApi from '../assets/TodoApi';
import TodoForm from './TodoForm';
import TodoItem from './TodoItem';

import { connect } from 'react-redux';

class TodoList extends Component{

  componentDidMount(){
    this.props.listAllTodo();
  }

  render(){

    return(
      <div>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              THINGS TO DO
            </Typography>
            <section style={{marginLeft: 'auto', marginRight: 10, position: 'relative'}}>
              <Badge badgeContent={
                this.props.todo
                              .filter(todo => todo.done === false)
                              .size

              } color="secondary">
                <AlarmOn />
              </Badge>
            </section>
          </Toolbar>
        </AppBar>
        <TodoForm addItem={this.props.addItem} removeAll={this.props.removeAllTodo}/>
        <Container maxWidth="sm" style={{marginTop:30}}>
          <List style={{position: 'relative'}}>
            {
              this.props.todo.size === 0
              ? <span style={{color:'red', fontSize:16, display:'flex', alignItems:'center', justifyContent:'center'}}>No activity to show now! :)</span>
              : this.props.todo.map(todo => (
                <TodoItem todoItem={todo} removeItem={this.props.removeItem} changeStatus={this.props.changeStatus} key={todo.id}/>
              ))

            }
          </List>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {todo : state.todo}
};

const mapDispatchToProps = dispatch => {
  return {
    listAllTodo : () => {
      dispatch(TodoApi.listAllTodo());
    },
    removeAllTodo : () => {
      dispatch(TodoApi.removeAllTodo());
    },
    removeItem : (id) => {
      dispatch(TodoApi.removeItem(id));
    },
    addItem : (item) => {
      dispatch(TodoApi.addItem(item));
    },
    changeStatus : (item) => {
      dispatch(TodoApi.changeStatus(item));
    }
  }
};

const TodoListContainer = connect(mapStateToProps,mapDispatchToProps)(TodoList);
export default TodoListContainer
