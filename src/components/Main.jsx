import React from 'react'
import NewTask from './NewTask'
import { Container } from '@chakra-ui/react'
import { useState } from 'react'

function Main() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || "")

    const onSubmit = (task, e) => {
      e.preventDefault()
      const NewTask = {
        nombre: task,
        id: self.crypto.randomUUID(),
        estado: false,
      }
      localStorage.setItem("tasks", JSON.stringify([...tasks, NewTask]))
      setTasks([...tasks, NewTask])
    }
  return (
    <Container maxW="container.sm">
      <NewTask onSubmit={onSubmit} />
    </Container>
  )
}

export default Main