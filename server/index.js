const express = require("express");
const app = express();
const cors = require("cors");
const socketIO = require("socket.io");
const http = require("http");
const port = 2022;

const users = [{}];

app.use(cors());

app.get("/", (req, res) => {
  res.send("yes it is working");
});

const server = http.createServer(app);

const io = socketIO(server);

io.on("connection", (socket) => {
  console.log("new connection setup");
  socket.on("joined", ({ user }) => {
    users[socket.id] = user;
    console.log(user, "has joined");
    socket.broadcast.emit("userJoined", {
      user: "Admin",
      message: `User has joined`,
    });
    socket.emit("welcome", { user: "Admin", message: `Welcome to the chat` });
  });

  socket.on("message",({message,id})=>{
    io.emit('sendMessage',{users:users[id],message,id})
  })

    socket.on("disconnected",()=>{
        socket.broadcast.emit("left",{user:"Admin",message:"User has left"})
        console.log(`User has left`)

    })  

});

server.listen(process.env.PORT || port, () => {
  console.log(`server is working on http://localhost:${port}`);
});
