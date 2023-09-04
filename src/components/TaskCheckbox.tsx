import { Check } from '@phosphor-icons/react';
import styles from './TaskCheckbox.module.css';

export function TaskCheckbox(){

    return (
        <label className={`${styles.checkboxLabel} ${styles.checked}`}>
            <Check size={10} fill='#fff' weight="bold" />
            <input type="checkbox" />
        </label>
    )
}