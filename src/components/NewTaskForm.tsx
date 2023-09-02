import { PlusCircle } from '@phosphor-icons/react';
import styles from './NewTaskForm.module.css';

export function NewTaskForm(){

    return (
        <form className={styles.taskForm}>
            <input type="text" placeholder="Adicione uma nova tarefa" />
            <button>Criar <PlusCircle width={20} height={20} /></button>
        </form>
    )
}