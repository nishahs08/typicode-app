import { Typography } from "@mui/material";
import { useEffect, useState } from "react"

export const AllTodos = ({ user }) => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then(todos => todos.json())
        .then(todos => { console.log('---',todos); setTodos(todos) })},[]);


    return (
        <>
         {todos.map(todo=>  <Typography>{todo.title} --- {todo.completed}</Typography>)}
        </>
    )
}