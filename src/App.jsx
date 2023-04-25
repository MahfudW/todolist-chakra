import { Heading, IconButton, useColorMode, VStack } from '@chakra-ui/react'
import React from 'react'
import TodoList from './component/TodoList';
import AddTodo from './component/AddTodo';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export default function App() {
    const taskTodos = [
        {
            id: 1,
            body: 'latihan koding',
        },
        {
            id: 2,
            body: 'baca buku koding',
        },
        {
            id: 3,
            body: 'nonton video koding',
        },
    ]

    const [todos, setTodos] = useState(
        () => JSON.parse(localStorage.getItem('todos')) || []
    )

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    function deleteTodo(id) {
        const newTodos = todos.filter(todo => {
            return todo.id !== id
        })
        setTodos(newTodos)
    }

    function addTodo(todo) {
        setTodos([...todos, todo])
    }

    const { colorMode, toggleColorMode } = useColorMode();

    return (
    <VStack p={4}>
        <IconButton
          icon={colorMode ==='light' ? <FaSun /> : <FaMoon /> }
          isRound='true'
          size='lg'
          alignSelf='flex-end'
          onClick={toggleColorMode}
          />
        <Heading mb='8' fontWeight='extrabold' size='2xl' bgGradient='linear(to-r, pink.500, blue.500, green.500)' bgClip='text' >To Do Project</Heading>
        <TodoList todos={todos} deleteTodo={deleteTodo} />
        <AddTodo addTodo={addTodo} />
    </VStack>
  )
}
