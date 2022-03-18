import { useContext } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from './components/About'
import TaskContext from './context/TaskContext'

const App = () => {
  const { tasks, showAddTask } = useContext(TaskContext)

  const Main = () => {
    return (
      <>
        {showAddTask && <AddTask />}
        {tasks.length > 0 ? <Tasks tasks={tasks} /> : 'No Tasks To Show'}
      </>
    )
  }

  return (
    <Router>
      <div className='container'>
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
