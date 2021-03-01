import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username_input: "",
      password_input: "",
      usernamereg_input: "",
      passwordreg_input: "",
      token: '',
      routes: [{ pathname: '/login',
      component: <Login />

      }]
    };
  }

  usernameInput = (e) => {
    console.log(e.target.value);
    const { value } = e.target;
    this.setState({ username_input: value });
  };

  passwordInput = (e) => {
    const { value } = e.target;
    this.setState({ password_input: value });
  };

  usernameRegInput = (e) => {
    const { value } = e.target;
    this.setState({ usernamereg_input: value });
  };

  passwordRegInput = (e) => {
    const { value } = e.target;
    this.setState({ passwordreg_input: value });
  };

  user;
  // token = getToken();
  setToken(userToken) {
    sessionStorage.setItem("token", JSON.stringify(userToken));
  }

  getToken() {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);

    return userToken?.data.token;
  }

  loginUser = async (e) => {
    try {
      e.preventDefault();
      const data = await Axios.post("http://localhost:3000/users/login", {
        username: this.state.username_input,
        password: this.state.password_input,
      });
      // const token = data;

      if (data.data.username !== this.state.username_input) {
        alert("Username/password is incorrect");
      } else {
        // setToken(token);
        // history.push("/dashboard");
        // myTimerLogin();
        alert("Login success");
      }
    } catch (error) {
      alert(error);
    }
  };

  registerUser = async (e) => {
    try {
      e.preventDefault();
      const res = await Axios.post("http://localhost:3000/users/register", {
        username: this.state.usernamereg_input,
        password: this.state.passwordreg_input,
      });
      const {
        data: { data },
      } = res;
      if (data.length === 1) {
        alert("Username existed");
      } else if (data.length === 0) {
        alert("User created");
        // history.push("/login");
      }
    } catch (error) {
      alert(error);
    }
  };
// //dashboard
//    getIncompleteTodos = async () => {
//     try {
//       const res = await Axios.get(
//         "http://localhost:3000/todos/incomplete/" + userToken.data.token
//       );
//       setTodos(res.data);
//     } catch (error) {
//       alert(error);
//     }
//   };

//    postTodo = async () => {
//     try {
//       const res = await Axios.post("http://localhost:3000/todos/addtodo", {
//         todo: todoText,
//         userToken: userToken.data.token,
//         status: 0,
//       });
//     } catch (error) {
//       alert(error);
//     }
//   };
//    postTodoComplete = async (id) => {
//     try {
//       const res = await Axios.put(
//         "http://localhost:3000/todos/update/" + id,
//         {
//           todo: todoText,
//           userToken: userToken.data.token,
//           status: 1,
//         }
//       );
//     } catch (error) {
//       alert(error);
//     }
//   };

//    postTodoUndoComplete = async (id) => {
//     try {
//       const res = await Axios.put(
//         "http://localhost:3000/todos/undoupdate/" + id,
//         {
//           todo: todoText,
//           userToken: userToken.data.token,
//           status: 0,
//         }
//       );
//     } catch (error) {
//       alert(error);
//     }
//   };

//    updateTodo2 = async (id) => {
//     try {
//       if (postTodoUndoComplete(id)) {
//         const newTodoList = [...todosComplete];
//         await setTodosComplete(newTodoList);

//         getIncompleteTodos();
//         getCompletedTodos();
//         alert("Task undo");
//       } else {
//         alert("error");
//       }
//     } catch (error) {
//       alert(error);
//     }
//   };

//    updateTodo = async (id) => {
//     try {
//       if (postTodoComplete(id)) {
//         const newTodoList = [...todos];
//         await setTodos(newTodoList);

//         getIncompleteTodos();
//         getCompletedTodos();
//         alert("Task completed");
//       } else {
//         alert("error");
//       }
//     } catch (error) {
//       alert(error);
//     }
//   };
//    addTodo = (e) => {
//     try {
//       e.preventDefault();
//       if (!todoText) return alert("Please input fields");

//       const newTodo = { todo: todoText };
//       const newTodos = [...todos, newTodo];
//       setTodoText("");
//       setTodos(newTodos);
//       if (postTodo(newTodos)) {
//         getIncompleteTodos();
//         alert("Todo added");
//       } else {
//         alert("try again");
//       }
//     } catch (error) {
//       alert(error);
//     }
//   };
//   //todocomplete functions
//    getCompletedTodos = async () => {
//     try {
//       const res = await Axios.get(
//         "http://localhost:3000/todos/completed/" + userToken.data.token
//       );
//       setTodosComplete(res.data);
//     } catch (error) {
//       alert(error);
//     }
//   };

//    deleteTodo = async (e) => {
//     try {
//       const res = await Axios.delete(
//         `http://localhost:3000/todos/deletetodo/${e.target.id}`
//       );
//       if (res.data.deleted === 1) {
//         const newTodos = todos.filter((todo) => todo.id !== e.target.id);
//         setTodos(newTodos);
//         window.confirm("Are you sure you want to delete todo?");
//       } else {
//         alert("try again");
//       }
//     } catch (error) {
//       alert(error);
//     }
//   };
  render() {
    // if (!token) {
    return (
      <div className="hold-transition register-page">
        {/* <Switch> */}
        <Route path="/register">
          <Register
            usernameRegInput={this.usernameRegInput}
            passwordRegInput={this.passwordRegInput}
            registerUser={this.registerUser}
          />
        </Route>
        <Route exact path="/">
          <Login
            setToken={this.setToken}
            usernameInput={this.usernameInput}
            passwordInput={this.passwordInput}
            loginUser={this.loginUser}
          />
        </Route>
        {/* </Switch> */}
      </div>
    );
    // } else {
    return (
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    );
  }
}
// }
export default App;
