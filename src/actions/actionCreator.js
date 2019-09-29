export function actionTodoList(data){
  return {type: 'TODOLIST', data};
}

export function actionRemoveItem(id){
  return {type: 'REMOVEITEM', id};
}

export function actionRemoveAll(){
  return {type: 'REMOVEALL'};
}

export function actionAddItem(item){
  return {type: 'ADDITEM', item};
}

export function actionChangeStatus(id){
  return {type: 'CHANGESTATUS', id};
}
