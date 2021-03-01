import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Axios from "axios";
// import Todos from "./Todos";
// import TodoComplete from "./TodoComplete";

function Dashboard() {
  const tokens = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokens);
  const [todos, setTodos] = useState([]);
  const [todosComplete, setTodosComplete] = useState([]);
  const [todoText, setTodoText] = useState("");

  // const logoutUser = () => {
  //   sessionStorage.clear();
  //   // history.push("/");
  //   myTimerRegister();
  // };

  // const history = useHistory();
  // function myTimerRegister() {
  //   setTimeout(function () {
  //     window.location.replace("/");
  //   }, 500);
  // }

  //Todos functions

  useEffect(() => {
    getIncompleteTodos();
    getCompletedTodos();
  }, []);

  const getIncompleteTodos = async () => {
    try {
      const res = await Axios.get(
        "http://localhost:3000/todos/incomplete/" + userToken.data.token
      );
      setTodos(res.data);
    } catch (error) {
      alert(error);
    }
  };

  const postTodo = async () => {
    try {
      const res = await Axios.post("http://localhost:3000/todos/addtodo", {
        todo: todoText,
        userToken: userToken.data.token,
        status: 0,
      });
    } catch (error) {
      alert(error);
    }
  };
  const postTodoComplete = async (id) => {
    try {
      const res = await Axios.put("http://localhost:3000/todos/update/" + id, {
        todo: todoText,
        userToken: userToken.data.token,
        status: 1,
      });
    } catch (error) {
      alert(error);
    }
  };

  const postTodoUndoComplete = async (id) => {
    try {
      const res = await Axios.put(
        "http://localhost:3000/todos/undoupdate/" + id,
        {
          todo: todoText,
          userToken: userToken.data.token,
          status: 0,
        }
      );
    } catch (error) {
      alert(error);
    }
  };

  const updateTodo2 = async (id) => {
    try {
      if (postTodoUndoComplete(id)) {
        const newTodoList = [...todosComplete];
        await setTodosComplete(newTodoList);

        getIncompleteTodos();
        getCompletedTodos();
        alert("Task undo");
      } else {
        alert("error");
      }
    } catch (error) {
      alert(error);
    }
  };

  const updateTodo = async (id) => {
    try {
      if (postTodoComplete(id)) {
        const newTodoList = [...todos];
        await setTodos(newTodoList);

        getIncompleteTodos();
        getCompletedTodos();
        alert("Task completed");
      } else {
        alert("error");
      }
    } catch (error) {
      alert(error);
    }
  };
  const addTodo = (e) => {
    try {
      e.preventDefault();
      if (!todoText) return alert("Please input fields");

      const newTodo = { todo: todoText };
      const newTodos = [...todos, newTodo];
      setTodoText("");
      setTodos(newTodos);
      if (postTodo(newTodos)) {
        getIncompleteTodos();
        alert("Todo added");
      } else {
        alert("try again");
      }
    } catch (error) {
      alert(error);
    }
  };
  //todocomplete functions
  const getCompletedTodos = async () => {
    try {
      const res = await Axios.get(
        "http://localhost:3000/todos/completed/" + userToken.data.token
      );
      setTodosComplete(res.data);
    } catch (error) {
      alert(error);
    }
  };

  const deleteTodo = async (e) => {
    try {
      const res = await Axios.delete(
        `http://localhost:3000/todos/deletetodo/${e.target.id}`
      );
      if (res.data.deleted === 1) {
        const newTodos = todos.filter((todo) => todo.id !== e.target.id);
        setTodos(newTodos);
        window.confirm("Are you sure you want to delete todo?");
      } else {
        alert("try again");
      }
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="wrapper">
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand-md navbar-light navbar-white">
        <div className="container">
          <a className="navbar-brand">
            <h2 className="brand-text font-weight-light">
              Welcome {userToken.data.username}
            </h2>
          </a>
          <button
            className="navbar-toggler order-1"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div>
            <button className="btn btn-primary">Logout</button>
          </div>
        </div>
      </nav>
      {/* /.navbar */}
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div className="content-header">
          <div className="container">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1 className="m-0">
                  {" "}
                  Todo List <small>App</small>
                </h1>
              </div>
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content-header */}
        {/* Main content */}
        <div className="content">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header" style={{ height: "80px" }}>
                    <div className="row">
                      <div className="col-md-5">
                        <h3>On Going Task </h3>
                      </div>

                      <div className="col-md-7">
                        <form onSubmit={addTodo}>
                          <div className="input-group mb-3">
                            <input
                              type="text"
                              value={todoText}
                              onChange={(e) => setTodoText(e.target.value)}
                              className="form-control"
                            />

                            <div className="input-group-prepend">
                              <button
                                type="submit"
                                className="btn btn-default btn-s"
                              >
                                Add Todo
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  {/* /.card-header */}

                  <div
                    className="card-body table-responsive p-0"
                    style={{ height: "400px" }}
                  >
                    <table className="table table-head-fixed">
                      <thead>
                        <tr>
                          <th style={{ width: "200px", textAlign: "center" }}>
                            Task
                          </th>
                          <th style={{ textAlign: "center" }}>Actions</th>
                        </tr>
                      </thead>

                      <tbody>
                        {todos.map((todo, id) => (
                          <tr key={todo.id}>
                            <td style={{ textAlign: "center" }}>{todo.todo}</td>
                            <td style={{ textAlign: "center" }}>
                              <div className="btn-group">
                                <button
                                  type="button"
                                  className="btn btn-success btn-sm"
                                  onClick={() => updateTodo(todo.id)}
                                >
                                  Done
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-danger btn-sm"
                                  onClick={deleteTodo}
                                  id={todo.id}
                                >
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* /.card-body */}
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-header" style={{ height: "80px" }}>
                    <div className="row">
                      <div className="col-md-8">
                        <h3>Task Completed</h3>
                      </div>

                      <div className="col-md-4">
                        <div className="input-group mb-3"></div>
                      </div>
                    </div>
                  </div>
                  {/* /.card-header */}

                  <div
                    className="card-body table-responsive p-0"
                    style={{ height: "400px" }}
                  >
                    <table className="table table-head-fixed">
                      <thead>
                        <tr>
                          <th style={{ width: "10px" }}></th>
                          <th style={{ width: "290px", textAlign: "center" }}>
                            Complete Task
                          </th>
                          <th style={{ width: "10px" }}></th>
                        </tr>
                      </thead>
                      <tbody>
                        {todosComplete.map((todo, id) => (
                          <tr key={todo.id}>
                            <td></td>
                            <td style={{ width: "200px", textAlign: "center" }}>
                              {todo.todo}
                            </td>
                            <td>
                              <button
                                className="btn btn-warning btn-sm"
                                onClick={() => updateTodo2(todo.id)}
                              >
                                Undo
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* /.card-body */}
                </div>
              </div>
            </div>
            {/* /.row */}
          </div>
          {/* /.container-fluid */}
        </div>
        {/* /.content */}
      </div>
      {/* /.content-wrapper */}
      {/* Control Sidebar */}
      <aside className="control-sidebar control-sidebar-dark">
        {/* Control sidebar content goes here */}
        <div className="p-3">
          <h5>Title</h5>
          <p>Sidebar content</p>
        </div>
      </aside>
      {/* /.control-sidebar */}
      {/* Main Footer */}
      <footer className="main-footer">
        {/* To the right */}
        <div className="float-right d-none d-sm-inline"></div>
        {/* Default to the left */}
        <strong>Copyright ©</strong>{" "}
      </footer>
    </div>
  );
}

export default Dashboard;
