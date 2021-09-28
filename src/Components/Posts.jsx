import {
  Card,
  CardContent,
  CardHeader,
  Fab,
  Grid,
  CardActions,
  Button,
  useMediaQuery,
  Dialog,
  Typography,
  DialogContent,
  Skeleton,
  Stack,
  TextField,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Box,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useState, useEffect } from "react";
import { Comments } from "./Comments";
import AddIcon from "@material-ui/icons/Add";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

export const Posts = ({ posts, userId, setPosts }) => {
  const [showPost, setShowPost] = useState(false);
  const [post, setPost] = useState({});
  const [showAddPost, setShowAddPost] = useState(false);
  const [user, setUser] = useState({});
  const theme = useTheme();

  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [newPost, setNewPost] = useState({
    title: "",
    body: "",
  });
  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (!userId) {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((response) => {
          setUsers(response);
        });
    }
  }, [userId]);

  function createPost() {
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({ ...newPost, userId: userId || user }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((response) => {
        setShowAddPost(false);
        alert("created post!!");
        setPosts([response, ...posts]);
        setNewPost({
          title: "",
          body: "",
        });
      })
      .catch((err) => alert("Problem occured", err));
  }

  return (
    <>
      <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
        <Masonry>
          {posts.length > 0
            ? posts.map((post) => (
                <Card
                  key={post.id}
                  style={{ margin: "10px", borderTop: "10px solid #84DCCF" }}
                >
                  <CardHeader title={post.title}></CardHeader>

                  <CardContent>{post.body}</CardContent>
                  <CardActions>
                    <Button
                      size="small"
                      onClick={() => {
                        setShowPost(true);
                        setPost(post);
                      }}
                    >
                      See Full post
                    </Button>
                  </CardActions>
                </Card>
              ))
            : Array(10)
                .fill(0)
                .map((s) => (
                  <Stack
                    key={post.id}
                    style={{ margin: "10px", padding: "5px" }}
                  >
                    <Skeleton
                      variant="rectangular"
                      width={250}
                      height={30}
                      style={{ margin: "8px" }}
                    />

                    <Skeleton
                      variant="rectangular"
                      width={250}
                      height={250}
                      style={{ margin: "8px" }}
                    />
                    <Skeleton
                      variant="rectangular"
                      width={80}
                      height={30}
                      style={{ margin: "8px" }}
                    />
                  </Stack>
                ))}
        </Masonry>
      </ResponsiveMasonry>

      <Dialog
        fullScreen={fullScreen}
        open={showPost}
        onClose={() => setShowPost(false)}
      >
        <DialogContent>
          <Grid container direction="column" spacing={2} style={{width:'400px'}}>
            <Grid item>
              <Button onClick={() => setShowPost(false)}>Close</Button>
            </Grid>

            <Grid item>
              <Typography variant="h4">{post.title}</Typography>
            </Grid>
            <Grid item>
              <Typography>{post.body}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" color="primary">
                comment
              </Typography>
            </Grid>
            {/* <Grid item><TextField label='comment' value={comment} onChange={(e)=>setComment(e.target.value)}/></Grid> */}
            <Grid item style={{ paddingLeft: "30px" }}>
              {" "}
              <Comments postId={post.id} />{" "}
            </Grid>
          </Grid>
        </DialogContent>
      </Dialog>

      <Fab
        color="primary"
        aria-label="add"
        style={{ position: "fixed", bottom: 10, right: 10 }}
        onClick={() => setShowAddPost(true)}
      >
        <AddIcon />
      </Fab>

      <Dialog
        fullScreen={fullScreen}
        open={showAddPost}
        onClose={() => setShowAddPost(false)}
      >
        <DialogContent>
          <Grid container direction="column" spacing={2} style={{}}>
            <Grid item style={{display:'flex',justifyContent:'space-between'}}>
              <Button onClick={() => setShowAddPost(false)}>Close</Button>
              <Button
                onClick={() => {
                  createPost();
                }}
              >
                Add
              </Button>
            </Grid>
            <Grid item>
              <TextField
              fullWidth
                label="Title"
                value={newPost.title}
                onChange={(e) =>
                  setNewPost({ ...newPost, title: e.target.value })
                }
              />
            </Grid>
            <Grid item>
              <TextField
              fullWidth
                label="Description"
                value={newPost.body}
                onChange={(e) =>
                  setNewPost({ ...newPost, body: e.target.value })
                }
              />
            </Grid>

            {!userId && (
              <Grid item>
                <Box sx={{ minWidth: 420 }}>
                  <FormControl fullWidth>
                    <InputLabel id="select">Select User</InputLabel>
                    <Select
                      labelId="select"
                      id="simple-select"
                      value={user}
                      label="Select User"
                      onChange={(e) => setUser(e.target.value)}
                    >
                      {users.map((option) => (
                        <MenuItem value={option.id} key={option.id}>{option.email}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </Grid>
            )}
          </Grid>
        </DialogContent>
      </Dialog>
    </>
  );
};
