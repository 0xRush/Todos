import React, { useState } from 'react'
import ListItem  from '@mui/material/ListItem'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Create from '@mui/icons-material/Create'

const TodoForm = ({addTodo}) => {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        addTodo(text);
        setText('');
    }
    
  return (
    <ListItem>
        <form onSubmit={handleSubmit}>
            <TextField sx={{ m: 1, width: '35ch' }} id="outlined-basic" label="Add Todo" variant="outlined" onChange={handleChange} value={text} 
            InputProps={{
                endAdornment: <InputAdornment position="end">
                <IconButton
                aria-label="create todo"
                edge="end"
                type='submit'
                >
                    <Create />
                </IconButton>
            </InputAdornment>,
            }}
                />
        </form>
    </ListItem>
  )
}

export default TodoForm