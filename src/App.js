import React, { useEffect, useState } from 'react';
import {Button, FormControl, Input, InputLabel} from '@material-ui/core';
import './App.css';
import Todo from './components/Todo';
import db from './firebase';
import firebase from "firebase";

function App() {
const [todos, setTodos] = useState([]);
const [input, setinput] = useState('');

useEffect(()=>{
  db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
    setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
  })
}, [input])

const addTodos = (event) => {
  console.log('works');

  db.collection('todos').add({
    todo: input,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  })
  setTodos([...todos, input]);
  event.preventDefault();
  setinput('');
  
}


  return (
    <div className="App">
      <h1>Sam's Todo do App</h1>
      <form className="form">

      <FormControl
      color = "primary"
      variant = "outlined"
      >
        
        <InputLabel>

        Write a to do
        </InputLabel>
        <Input
        value = {input} onChange={event => setinput(event.target.value)}/>
      </FormControl>
      <Button  disabled = {!input} onClick={
        addTodos
      } variant="contained" color="white">
  Add To do
</Button>
      </form>

      <ul>
      {todos.map(todo =>(
        <Todo todo = {todo}/>
      ))}
      </ul>
    </div>
  );
}

export default App;
