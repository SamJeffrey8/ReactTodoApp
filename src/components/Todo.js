import { Avatar, Button, List, ListItem, ListItemAvatar, ListItemText, Modal } from '@material-ui/core';
import React, { useState } from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import db from '../firebase';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

function Todo(props) {

    const classes  = useStyles();

    const [open, setOpen] = useState(false);

    const [input, setinput] = useState(props.todo.todo);


    const handleOpen = () => {
        setOpen(true);
    }

    const updateTodo = () => {
        setOpen(false);
        db.collection('todos').doc(props.todo.id).set({
            todo: input,

        }, 
        {
            merge: true
        }
        )

    }

    return (
        <>
        <Modal
        open = {open}
        onClose = {e => setOpen(false)}
        >
            <div className = {classes.paper}>
                <h1>
                    open
                </h1>
<input value = {input} onChange ={event =>setinput(event.target.value)} />
                <Button onClick = {e => updateTodo()}>
Update Todo
                </Button>
            </div>

        </Modal>
        <List className='todo_list'>
            
            <ListItem>
                <ListItemAvatar>
                    
                </ListItemAvatar>
                <ListItemText primary={props.todo.todo} secondary="Dummy Shit"/>
            </ListItem>
            <button
            onClick ={e => setOpen(true)
            }
            >
                edit
            </button>
            <DeleteForeverIcon onClick = {event => db.collection('todos').doc(props.todo.id).delete()}>
                Delete
            </DeleteForeverIcon>
        </List>
        </>
    )
}

export default Todo
