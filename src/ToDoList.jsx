import * as React from 'react';
import List from '@mui/material/List';
import { useState, useEffect } from 'react'
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem("todos"));
    if (!data) return [];
    return data;
}

const ToDoList = () => {
    const [todos, setTodos] = useState(getInitialData);

    const removeTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.filter(t => t.id !== id);
        });
    }

    function toggleTodo (id) {
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                return todo.id === id ? {...todo, completed: !todo.completed} : todo
            });
        });
    }

    const addTodo = (text) => {
        setTodos(prevTodos => {
            return [...prevTodos, {id:crypto.randomUUID(), completed: false, text:text}]
        })
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        m: 3,
    }}>
        <Typography variant="h2" component="h1" sx={{ flexGrow: 1 }}>
            Todos
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map(todo => {
                return <TodoItem key={todo.id} todo={todo} onremove={() => removeTodo(todo.id)} toggle={() => toggleTodo(todo.id)} />
            })}
            <TodoForm addTodo={addTodo}/>
        </List>
    </Box>
  )
}

export default ToDoList