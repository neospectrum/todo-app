import React from 'react';
import styles from './App.module.css';
import { TaskWrapper } from './components/TaskWrapper/TaskWrapper';

function App() {
  return (
    <div className={ styles.wrapper }>
      <TaskWrapper/>
    </div>
  );
};

export default App;
