import React from 'react'
import { Box, Input } from '@chakra-ui/react'
import { useState } from 'react'
import { Button} from '@chakra-ui/react'


function NewTask({onSubmit}) {
  const [task, setTask] = useState("")

  const addTask = (e) => {
    e.preventDefault();
    onSubmit(task, e);
    setTask("");
  };

  return (
    <Box>
      <Input placeholder='Ingresar nueva tarea' value={task} onChange={(e) => setTask(e.target.value)}/>
      <Button colorScheme='purple' type='submit' onClick={(e) => addTask(e)} my={5}>Button</Button>
    </Box>
  )
}

export default NewTask