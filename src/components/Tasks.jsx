import { useContext } from 'react'
import Task from './Task'
import TaskContext from '../context/TaskContext'

const Tasks = () => {
  const { tasks } = useContext(TaskContext)

  return (
    <>
      {tasks.map((task) => (
        <Task key={task.id} task={task}></Task>
      ))}
    </>
  )
}

export default Tasks
