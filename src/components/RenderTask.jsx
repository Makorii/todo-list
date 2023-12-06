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
      <Stack direction={{ base: "row" }} flexWrap={"wrap"} justifyContent={"center"}>
        <CardBody textAlign={"center"} minWidth={"10rem"}>
          {status === false? <Heading size="md">Nueva tarea</Heading> : <Heading size="s">Tarea realizada!</Heading>}
          {status === false ? <Text py="2">{task}</Text> : <Text as='s' py="2" color={"gray"}>{task}</Text>}
        </CardBody>
        <CardFooter alignItems={'center'}>
          {status === false ? <Button variant="outline" colorScheme="purple" backgroundColor={"#815ad55a"} onClick={() => onStatus(id)}>
            <GiCheckMark />
          </Button> : <Button variant="outline" colorScheme="gray" backgroundColor={"gray"} _hover={"none"} onClick={() => onStatus(id)}>
            <GiCheckMark color='white'/>
          </Button>}
          <Button type='button' onClick={() => onClose(id)}>
            <FcEmptyTrash size={40} />
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}

export default RenderTask