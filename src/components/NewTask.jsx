import React from 'react'
import { Box, Input } from '@chakra-ui/react'
import { useState } from 'react'
import { Button} from '@chakra-ui/react'


function NewTask({onSubmit}) {
  const [task, setTask] = useState("")
  return (
    <Box>
      <Input placeholder='Ingresar nueva tarea' value={task} onChange={(e) => setTask(e.target.value)}/>
      <Button colorScheme='purple' type='submit' onClick={(e) => onSubmit(task, e)} my={5}>Button</Button>
    </Box>
  )
}

export default NewTask