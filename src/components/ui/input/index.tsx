import  { InputHTMLAtributes, TextareaHTMLAttributes } from 'react';
 import styles from './styles.module.scss';

export function Input({...rest}: InputProps){
 
    return(

        <input className={styles.input} {...rest} />
    )
}