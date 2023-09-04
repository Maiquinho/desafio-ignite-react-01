import { Trash } from '@phosphor-icons/react';
import { TaskCheckbox } from './TaskCheckbox';
import styles from './Task.module.css';

export function Task(){

    return (
        <div className={`${styles.task} ${styles.checked}`}>
            <TaskCheckbox />
            <span>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
            <button className={styles.deleteTask}>
                <Trash width={16} height={16} weight='bold' />
            </button>
        </div>
    )
}