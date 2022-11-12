import React, { FC, useContext, useState } from 'react';
import { TaskContext } from '../../context/task';
import { IFilter } from '../../types/props';
import './TaskControls.css';

interface TaskControlsProps {
    all: () => void
    pending: () => void
    completed: () => void
}

export const TaskControls: FC<TaskControlsProps> = ({ all, pending, completed }) => {
    const [ checked, setChecked ] = useState(false);
    
    const { removeAllTasks } = useContext(TaskContext);

    return (
        <div className='taskControls'>
        <ul className='controls'>
            <li>
                <input id='all' name='controls' type="radio"/>
                <label htmlFor='all' onClick={ all }>All</label>
            </li>
            <li>
                <input id='pending'  name='controls' type="radio" />
                <label htmlFor='pending' onClick={ pending }>Pending</label>
            </li>
            <li>
                <input id='completed' name='controls' type="radio"/>
                <label htmlFor='completed' onClick={ completed }>Complete</label>
            </li>
            <li className='clear' onClick={ removeAllTasks }>Clear All</li>
        </ul>
    </div>
    );
};
