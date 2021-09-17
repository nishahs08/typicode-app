import { useEffect,useState } from "react"
import { Todos } from "./Todos"

export const UserTodos =({user})=>{
const [todos,setTodos] =useState()
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/todos`)
        .then(response=>response.json())
        .then(response=>{setTodos(response); console.log(response)})
    },[])
    return <Todos todos={todos}/>
}