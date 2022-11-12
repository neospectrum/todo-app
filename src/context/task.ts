import React, { FC } from 'react'
import { ITask } from '../types/props';

interface ITaskContext {
    addTask: (task: ITask) => void
    removeTask: (task: ITask) => void
    removeAllTasks: () => void
    toggleTask: (task: ITask) => void
}

export const TaskContext = React.createContext<ITaskContext>({ 
    addTask: () => {}, 
    removeTask: () => {},
    removeAllTasks: () => {}, 
    toggleTask: () => {},
});
