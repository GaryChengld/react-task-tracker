import { useContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from './components/About'
import { TaskProvider } from './context/TaskContext'
import TaskContext from './context/TaskContext'

const App = () => {
  const { tasks, showAddTask, setShowAddTask, addTask, deleteTask, toggleReminder } = useContext(TaskContext)

  const Main = () => {
    return (
      <>
        {showAddTask && <AddTask onAdd={addTask} />}
        {tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        ) : (
          'No Tasks To Show'
        )}
      </>
    )
  }

  return (
    <TaskProvider>
      <Router>
        <div className='container'>
          <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/about' element={<About />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </TaskProvider>
  )
}

export default App
