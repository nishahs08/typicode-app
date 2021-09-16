import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react"

export const Todos = ({ user }) => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/todos`)
        .then(todos => todos.json())
        .then(todos => { console.log('---',todos); setTodos(todos) })},[]);


    return (
        <>
         {todos.map(todo=>  <Typography>{todo.title} --- {todo.completed}</Typography>)}
        </>
    )
}