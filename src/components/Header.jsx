import { Center, Heading } from '@chakra-ui/react'
import React from 'react'


function Header() {
  return (
    <Heading as="h1" size="4xl">
      <Center>ToDo List</Center>
    </Heading>
  );
}

export default Header