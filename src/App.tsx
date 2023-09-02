import { Header } from './components/Header';
import { NewTaskForm } from './components/NewTaskForm';
import { Tasks } from './components/Tasks';

import './global.css';
import styles from './App.module.css';

export default function App() {
  return (
    <>
      <Header />

      <main className={styles.container}>
        <NewTaskForm />
        <Tasks />
      </main>

    </>
  )
}
