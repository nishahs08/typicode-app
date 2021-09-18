import { Typography ,Container} from "@mui/material";
import { useEffect, useState } from "react"
import { Todos } from "./Todos";

export const AllTodos = ({ user }) => {

    const [todos, setTodos] = useState([]);

    useEffect(() => {fetch(`https://jsonplaceholder.typicode.com/todos`)
        .then(todos => todos.json())
        .then(todos => { console.log('---',todos); setTodos(todos) })},[]);

        
        const editTodosStatus=(id)=>{
            const updatedTodos = todos.map(todo=>
                {
                    if(todo.id === id){
                        todo.completed =!todo.completed
                    }
                    return todo
                })
                setTodos(updatedTodos)
        }
    return  <Container maxWidth='lg'> <Todos todos={todos} editTodosStatus={editTodosStatus}/></Container>

}