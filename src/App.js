import React from 'react';
import TodoList from './components/TodoList';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
      <section>
        <CssBaseline />
        <TodoList/>
      </section>
  );
}

export default App;
