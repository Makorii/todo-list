import React from 'react'
import NewTask from './NewTask'
import { Box, Center, Container, Grid } from '@chakra-ui/react'
import { useState } from 'react'
import ContainerTasks from './ContainerTasks'
import SelectsTaks from './SelectsTask'

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

    const onClose = (id) => {
      let filteredTasks = tasks.filter((task) => task.id !== id)
      localStorage.setItem("tasks", JSON.stringify(filteredTasks))
      setTasks(filteredTasks)
    }
  
    const onStatus = (id) => {
      const updatedTasks = tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            estado: !task.estado,
          };
        }
        return task;
      });
    
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setTasks(updatedTasks);
    };
  return (
    <Container maxW="container.sm">
      <Grid templateColumns="repeat(2, 1fr)" gap={6} my={10}>
        <NewTask onSubmit={onSubmit} />
        <SelectsTaks arrTask={tasks}/>
      </Grid>
      <Center>
        <Box w="60%">
          <ContainerTasks 
            arrTask={tasks}
            onClose={onClose}
            onStatus={onStatus}/>
        </Box>
      </Center>
    </Container>
  )
}

export default Main