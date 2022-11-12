import React, { FC, ChangeEvent } from 'react';
import styles from './Input.module.css';

interface InputProps {
    type: string
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    placeholder: string
};

export const Input: FC<InputProps> = ({ type, placeholder, ...props }) => {
    return (
        <input className={ styles.input } type={ type } placeholder={ placeholder } { ...props }/>
    );
;}
