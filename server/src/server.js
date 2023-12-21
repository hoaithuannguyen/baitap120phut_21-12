const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
//Import Router
const todoRouter = require("./router/todo.routes");
// Cau hinh
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// // su dung Router
app.use("/api/v1/todoList", todoRouter);
// Tao cong chay server
const POST = 5693
app.listen(POST, () => {
    console.log(`đang chạy server ${POST}`);
});