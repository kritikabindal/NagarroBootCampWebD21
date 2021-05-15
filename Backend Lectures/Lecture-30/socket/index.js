const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const socketio = require("socket.io");
const server = http.createServer(app);
//all the connection handle by the io
const io = socketio(server);

app.get("/", (req, res) => {
  res.send("connected");
});

app.use("/", express.static(path.join(__dirname, "/public")));
//=============================================

//demo part

// io.on("connection", (socket) => {

//   socket.on("boom", () => {
//     console.log("BOMMM!!!");
//   });

//   setInterval(() => {
//     socket.emit("whizz");
//   }, 2000);

//   console.log(socket.id);
// });
//===============================

io.on("connection", (socket) => {
  socket.on("send_msg", (data) => {
    console.log(`${socket.id}==${data.msg}`);
    io.emit("recieved_msg");
    msg: data.msg;
    id:socket.id;
  });
});
// console.log(socket.id);

server.listen(3001, () => {
  console.log("server running at http://localhost:3001");
});
