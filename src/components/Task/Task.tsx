import React, { ChangeEvent, FC, useContext, useState } from 'react';
import { TaskContext } from '../../context/task';
import { ITask } from '../../types/props';
import { Input } from '../Input/Input';
import './Task.css';


interface TaskProps {
    task: ITask
};

export const Task: FC<TaskProps> = ({ task }) => {
    const [ value, setValue ] = useState('');
    const [ settings, setSettings ] = useState(false);
    const [ editing, setEditing ] = useState(false);

    const { removeTask, toggleTask } = useContext(TaskContext);

    const settingsClasses = [ 'settingsMenu', settings && 'active' ].join(' ');
    const checkboxClasses = [ 'checkbox', task.completed && 'active' ].join(' ');
    const taskClasses = [ 'task', task.completed ? 'active' : '' ].join(' ');

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const openHandler = () => {
        setSettings(true);
    };
    const removeHandler = () => {
        removeTask(task);
        setSettings(false);
    };
    const editHandler = () => {
        setEditing(true);
        setSettings(false);
    };
    const submitHandler = () => {
        task.task = value;
        task.completed = false;
        setEditing(false);
    };
    return (
        <div className={ taskClasses }>
            { editing 
                ?   <form onSubmit={ submitHandler }>
                        <Input type='text' value={ value } placeholder={ 'Change task value...' } onChange={ changeHandler } />
                    </form>
                :   <div className={ 'taskContent' } onClick={ () => toggleTask(task) }>
                        <div className={ checkboxClasses }></div>
                        <span>{ task.task }</span>
                    </div>
            }
            { !editing &&
                <div className={ 'settings' }>
                    <span className={ 'settingsIcon' } onClick={ openHandler }></span>
                    { settings && 
                        <ul className={ settingsClasses }>              
                            <li onClick={ editHandler }>Edit</li>            
                            <li onClick={ removeHandler }>Delete</li>            
                        </ul>
                    }
                </div>
            }
        </div>
    );
};
