import { Header } from './components/Header';
import { PlusCircle } from '@phosphor-icons/react';
import { EmptyTasks } from './components/EmptyTasks';
import { Task } from './components/Task';

import './global.css';
import styles from './App.module.css';

export default function App() {

  const tasks = [
    {
      id: 1,
      content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      checked: false,
    },
    {
      id: 2,
      content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      checked: false,
    },
    {
      id: 3,
      content: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
      checked: false,
    },
  ];

  return (
    <>
      <Header />

      <main className={styles.container}>
        <form className={styles.taskForm}>
          <input type="text" placeholder="Adicione uma nova tarefa" />
          <button>Criar <PlusCircle width={20} height={20} /></button>
        </form>
        <section className={styles.tasks}>
          <div className={styles.tasksInfo}>
            <div className={`${styles.tasksCount} ${styles.tasksCreated}`}>
              <strong>Tarefas criadas</strong>
              <span>5</span>
            </div>
            <div className={`${styles.tasksCount} ${styles.tasksDone}`}>
              <strong>Concluídas</strong>
              <span>2 de 5</span>
            </div>
          </div>
          <div className={styles.taskList}>

            {tasks.length == 0 && (
              <EmptyTasks />
            )}
            {tasks.length > 0 &&
              tasks.map(task => <Task key={task.id} />)
            }

          </div>
        </section>
      </main>
    </>
  )
}
