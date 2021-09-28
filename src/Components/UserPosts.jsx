import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { Posts } from "./Posts";

export const UserPosts = ({ user }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
      .then((response) => response.json())
      .then((posts) => posts.filter((post) => post.userId === user.id))
      .then((posts) => {
        setPosts(posts);
      });
  }, [user.id]);

  return (
    <Box style={{ marginLeft: "230px" }}>
      <Posts posts={posts} userId={user.id} setPosts={setPosts} />
    </Box>
  );
};
