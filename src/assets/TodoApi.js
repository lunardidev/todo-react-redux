import { actionTodoList,
        actionRemoveItem,
        actionRemoveAll,
        actionAddItem,
        actionChangeStatus } from '../actions/actionCreator';

export default class TodoApi{

  static listAllTodo(){

    return dispatch => {

      const defaultData = [
        {id:Math.random().toString(36).substr(2, 9), text:'To Make Coffee', done: false, date: new Date('2019-09-22T03:24:00')},
        {id:Math.random().toString(36).substr(2, 9), text:'Buy Book', done: false, date: new Date('2019-09-22T10:20:00')},
        {id:Math.random().toString(36).substr(2, 9), text:'Study 1 hour of English', done: true, date: new Date('2019-09-19T05:14:00')},
        {id:Math.random().toString(36).substr(2, 9), text:'Buy milk', done: true, date: new Date('2019-09-18T01:14:00')},
      ];


      dispatch(actionTodoList(defaultData));

      return defaultData;
    }
  }

  static addItem(item){
    return dispatch => {
      dispatch(actionAddItem(item));
    }
  }

  static removeAllTodo(){
    return dispatch => {
      dispatch(actionRemoveAll());
    }
  }

  static removeItem(id){
    return dispatch => {
      dispatch(actionRemoveItem(id));
      return id;
    }
  }

  static changeStatus(id){
    return dispatch => {
      dispatch(actionChangeStatus(id));
      return id;
    }
  }
}
