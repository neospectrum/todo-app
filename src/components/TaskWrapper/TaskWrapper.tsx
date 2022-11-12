import { useEffect, useMemo, useState } from 'react';
import { IFilter, ITask } from '../../types/props';
import { Task } from '../Task/Task';
import { TaskInput } from '../TaskInput/TaskInput';
import { TaskContext } from '../../context/task';
import './TaskWrapper.css';
import { TaskControls } from '../TaskControls/TaskControls';
import { useTasks } from '../../hooks/useTasks';

export const TaskWrapper = () => {
    const [ tasks, setTasks ] = useState<ITask[]>([]);
    const [ filter, setFilter ] = useState<IFilter>({ sort: false, query: false });

    const sortedTasks = useTasks(tasks, filter);

    useEffect(() => {
        const loadTasks = localStorage.getItem('tasks') || '[]';
        setTasks(JSON.parse(loadTasks));
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [ tasks ]);

    const addTask = (task: ITask) => {
        setTasks([...tasks, task]);
    };

    const removeTask = (task: ITask) => {
        setTasks(tasks.filter((item) => item.task !== task.task));
    };
    const removeAllTasks = () => {
        setTasks([]);
    };
    const toggleTask = (task: ITask) => {
        setTasks(tasks.map((item) => {
            if (item.task === task.task) {
                item.completed = !task.completed
            };
            return item;
        }));
    };
// добавить закреп, таймер, звук по таймеру, установка таймера, вложенные списки
    return (
        <TaskContext.Provider value={{ addTask, removeTask, removeAllTasks, toggleTask }}>
            <div className={ 'taskWrapper' }>
                <TaskInput onCreate={ addTask }/>
                <TaskControls 
                    all={ () => { setFilter({...filter, query: true}) } } 
                    pending={ () => { setFilter({sort: false, query: false}) } } 
                    completed={ () => { setFilter({sort: true, query: false}) } }
                />
                <ul className={ 'taskBox' }>
                    { tasks 
                        ? (sortedTasks.map((task: ITask, index) => 
                            <li key={ index }>
                                <Task task={ task }></Task>
                            </li>
                            ))   
                        : 
                            <div>empty</div>
                    }
                </ul>
            </div>
        </TaskContext.Provider>
    );
};
