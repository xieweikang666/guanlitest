// server/controllers/todolist

const todolist = require('../models/todolist.js');

const getTodolist = function* (){ // 获取某个用户的所有todolist
  const id = this.params.id; // 获取url里传过来的参数里的id
  const result = yield todolist.getTodolistById(id);  // 通过yield “同步”地返回查询结果
  this.body = result // 将请求的结果放到response的body里返回
}

const createTodolist = function* (){ // 给某个用户创建一条todolist
  const data = this.request.body; // post请求，数据是在request.body里的
  const result = yield todolist.createTodolist(data);

  this.body = {
    success: true
  }
}


module.exports = {
  getTodolist,
  createTodolist
}