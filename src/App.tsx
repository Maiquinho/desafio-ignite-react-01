import { Header } from './components/Header';
import { NewTaskForm } from './components/NewTaskForm';

import './global.css';
import styles from './App.module.css';

export default function App() {
  return (
    <div>
      <Header />

      <main className={styles.container}>
        <NewTaskForm />
      </main>

    </div>
  )
}
