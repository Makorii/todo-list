import React from 'react'
import { Card, Heading, CardBody, Stack, CardFooter, Button } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { GiCheckMark } from "react-icons/gi";
import { FcEmptyTrash } from "react-icons/fc";


function RenderTask({id, task, onClose, onStatus, status}) {
  return (
    <Card
      direction={{ base: "column" }}
      overflow="hidden"
      variant="outline"
      my={5}
    >
      <Stack direction={{ base: "row" }}>
        <CardBody>
          <Heading size="md">Nueva tarea</Heading>
          {status === false ? <Text py="2">{task}</Text> : <Text as='s' py="2">{task}</Text>}
        </CardBody>
        <CardFooter alignItems={'center'}>
          <Button variant="outline" colorScheme="purple" onClick={() => onStatus(id)}>
            <GiCheckMark />
          </Button>
          <Button type='button' onClick={() => onClose(id)}>
            <FcEmptyTrash size={40} />
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}

export default RenderTask