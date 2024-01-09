import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Delete  from '@mui/icons-material/Delete';

const TodoItem = ({todo, onremove, toggle}) => {
    const labelId = `checkbox-list-label-${todo.id}`;

    return (
        <ListItem
            secondaryAction={
            <IconButton edge="end" aria-label="comments" onClick={onremove} >
                <Delete />
            </IconButton>
            }
            disablePadding
        >
            <ListItemButton role={undefined} dense>
            <ListItemIcon>
                <Checkbox
                edge="start"
                checked={todo.completed}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
                onChange={toggle}
                />
            </ListItemIcon>
            <ListItemText id={labelId} primary={todo.text} />
            </ListItemButton>
        </ListItem>
    );
}

export default TodoItem