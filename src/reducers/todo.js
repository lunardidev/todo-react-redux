import {List} from 'immutable';

const sortedList = list => list.sort(function(lhs, rhs) {
  return lhs.date < rhs.date;
});

export function todo(state=new List(),action){

  if(action.type === 'TODOLIST'){

    return sortedList(new List(sortedList(action.data)));
  }

  if(action.type === 'ADDITEM'){

    let newState = state.toArray();
    newState.push({id:Math.random().toString(36).substr(2, 9),text:action.item, done:false, date:new Date()});
    return sortedList(new List(sortedList(newState)));
  }

  if(action.type === 'REMOVEITEM'){

    const newState = state.filter(todo => todo.id !== action.id);

    if(newState.size === 0){
      return new List();
    }

    return sortedList(new List(sortedList(newState)));
  }

  if(action.type === 'CHANGESTATUS'){

    const newState = state
      .map(todo => {
        todo.done = todo.id === action.id ? !todo.done : todo.done;
        return todo;
      })
      .toArray();

    return new List(sortedList(newState));
  }

  if(action.type === 'REMOVEALL'){

    return new List();
  }

  return state;
}
