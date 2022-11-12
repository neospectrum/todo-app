import React, { ChangeEvent, FormEvent, useState, FC } from 'react';
import TaskImage from './TaskImage.svg';
import { Input } from '../Input/Input';
import styles from './TaskInput.module.css';
import { ITask } from '../../types/props';

interface TaskInputProps {
    onCreate: ({ task }: ITask) => void
}

export const TaskInput: FC<TaskInputProps> = ({ onCreate }) => {
    const [ value, setValue ] = useState('');

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    const submitHandler = async (e: FormEvent) => {
        e.preventDefault();

        onCreate({ task: value, completed: false });
        setValue('');
    }
    
    return (
        <div className={ styles.taskInput }>
            <img src={ TaskImage } alt="taskInput" />
            <form onSubmit={ submitHandler }>
                <Input type='text' value={ value } placeholder={ 'Input your task' } onChange={ (e) => changeHandler(e) }/>
            </form>
        </div>
    )
}
