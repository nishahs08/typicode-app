import { useEffect, useState } from "react";
import { Todos } from "./Todos";
import { Box } from "@mui/material";
export const UserTodos = ({ user }) => {
  const [todos, setTodos] = useState();
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/todos`)
      .then((response) => response.json())
      .then((response) => {
        setTodos(response);
        console.log(response);
      });
  }, [user.id]);
  const editTodosStatus = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <Box style={{ marginLeft: "200px" }}>
      <Todos todos={todos} editTodosStatus={editTodosStatus} />
    </Box>
  );
};
