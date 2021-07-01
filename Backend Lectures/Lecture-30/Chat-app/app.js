// const express = require("express");
// const app = express();
// const http = require("http");
// const path = require("path");
// const socketio = require("socket.io");
// const server = http.createServer(app);
// //all the connection handle by the io
// const io = socketio(server);

// app.use("/", express.static(path.join(__dirname, "/public")));

// const user = {};

// io.on("connection", (socket) => {
//   socket.on("login", (data) => {
//     // console.log(data.name);
//     user[socket.id] = data.name;
//   });

//   socket.on("send_msg", (data) => {
//     // console.log(data.msg);

//     io.emit("recieved_msg", {
//       msg: data.msg,
//       //   id: socket.id,
//       name: users[socket.id],
//     });
//   });
// });

// server.listen(process.env.PORT || 3000, () => {
//   console.log("server running at http://localhost:3000");
// });


const express = require("express");
const app = express();
// const dotenv = require("dotenv").config();
const http = require("http");
const socketio = require("socket.io");
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static("public"));


const users = {};

io.on("connection", (socket) => {
  socket.on("login", (data) => {
    // console.log(data.name);
    users[socket.id] = data.name;
  });

  socket.on("send_msg", (data) => {
    // console.log(data.msg);
    io.emit("recieved_msg", {
      msg: data.msg,
      name: users[socket.id],
    });
  });
});

server.listen( 4040, () =>
  console.log(`> Server is up and running at http://localhost:4040`)
);
