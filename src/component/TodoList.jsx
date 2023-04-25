import { Badge, HStack, IconButton, Spacer, StackDivider, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { FaTrash } from 'react-icons/fa';

export default function TodoList({ todos, deleteTodo }) {
    if (!todos.length) {
        return (
            <Badge colorScheme='linkedin' p='4' m='4' borderRadius='full'>Selamat semua tugas selesai semua...!!!</Badge>
        )
    }

  return (
    <VStack
      divider={ <StackDivider /> }
      borderColor='gray.300'
      borderWidth='1px'
      p='4'
      borderRadius='lg'
      w='100%'
      maxW={{base:'90vw', sm:'80vw', lg:'50vw', xl:'40vw'}}
      alignItems='stretch'
    >
        {todos.map(todo => (
            <HStack key={todo.id}>
                <Text>{todo.body}</Text>
                <Spacer />
                <IconButton icon={ <FaTrash /> } isRound='true' onClick={() => deleteTodo(todo.id)} />
            </HStack>
        ))}
    </VStack>
  )
}
