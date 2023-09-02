import styles from './Tasks.module.css';

export function Tasks(){

    return (
        <div className={styles.tasks}>
            <div className={styles.tasksInfo}>
                <div className={`${styles.tasksCount} ${styles.tasksCreated}`}>
                    <strong>Tarefas criadas</strong>
                    <span>5</span>
                </div>
                <div className={`${styles.tasksCount} ${styles.tasksDone}`}>
                    <strong>Tarefas concluídas</strong>
                    <span>2 de 5</span>
                </div>
            </div>
            <div className={styles.taskList}>

                <div>
                    task 1
                </div>
                <div>
                    task 2
                </div>

            </div>
        </div>
    )
}