import styles from './EmptyTasks.module.css';
import clipboardIcon from '../assets/clipboard.png';

export function EmptyTasks(){

    return (
        <div className={styles.emptyTasks}>
            <img src={clipboardIcon} alt="icone lista de tarefas" />
            <p><strong>Você ainda não tem tarefas cadastradas</strong><br />Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}