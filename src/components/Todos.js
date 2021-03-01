// import React, { useEffect, useState } from "react";
// import Axios from "axios";

// function Todos({ userToken }) {
//   const [todos, setTodos] = useState([]);
//   const [todoText, setTodoText] = useState("");

//     useEffect(() => {
//         getIncompleteTodos();
//   }, []);

//   const getIncompleteTodos = () => {
//     // console.log(filter);
//     Axios.get(
//       "http://localhost:3000/users/todos/incomplete/" + userToken.data.token
//     ).then((res) => {
//       setTodos(res.data);
//     });
//   };

//   const postTodo = () =>
//     Axios.post("http://localhost:3000/users/todo", {
//       todo: todoText,
//       userToken: userToken.data.token,
//       status: 0,
//     }).then((res) => {
//       console.log(res);
//     });

//   const postTodoComplete = (id) => {
//     // console.log(id);
//     Axios.put("http://localhost:3000/users/todo/update/" + id, {
//       todo: todoText,
//       userToken: userToken.data.token,
//       status: 1,
//     }).then((res) => {
//       console.log(res.data);
//     });
//   };
//   const updateTodo = (id) => {
//     // console.log(id);
//     const newTodoList = [...todos];
//     // const todoItem = newTodoList.find((todo) => todo.id === id);
//     // const newTodoCompleteList = [...todosComplete];
//     setTodos(newTodoList);

//     // setTodosComplete(newTodoCompleteList);
//     postTodoComplete(id);
//     getIncompleteTodos()

//     // postTodoIncomplete(id)
//   };
//   const addTodo = (e) => {
//     e.preventDefault();
//     if (!todoText) return;
//     const newTodo = { todo: todoText };
//     const newTodos = [...todos, newTodo];
//     setTodoText("");
//     setTodos(newTodos);
//     postTodo(newTodos);
//     getIncompleteTodos();
//   };

//   const deleteTodo = (e) => {
//     Axios.delete(`http://localhost:3000/users/todo/${e.target.id}`).then(
//       (res) => {
//         if (res.data.deleted === 1) {
//           const newTodos = todos.filter((todo) => todo.id !== e.target.id);
//           setTodos(newTodos);
//           alert("deleted");
//         } else {
//           alert("try again");
//         }
//         // console.log(res.data);
//       }
//     );
//   };
//   return (
//     <div className="col-md-6">
//       <div className="card">
//         <div className="card-header">
//           <div className="row">
//             <div className="col-md-5">
//               <h3>List of Task </h3>
//             </div>

//             <div className="col-md-7">
//               <div className="input-group mb-3">
//                 <input
//                   type="text"
//                   value={todoText}
//                   onChange={(e) => setTodoText(e.target.value)}
//                   className="form-control"
//                 />
//                 <form onSubmit={addTodo}>
//                   <div className="input-group-prepend">
//                     <button type="submit" className="btn btn-default btn-s">
//                       Add Task
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//         {/* /.card-header */}

//         <div className="card-body p-0">
//           <table className="table">
//             <thead>
//               <tr>
//                 <th style={{ textAlign: "center" }}>Task</th>
//                 <th style={{ width: "10px" }}></th>
//               </tr>
//             </thead>

//             <tbody>
//               {todos.map((todo, id) => (
//                 <tr key={todo.id}>
//                   <td style={{ width: "200px", textAlign: "center" }}>
//                     {todo.todo}
//                   </td>
//                   <td style={{ textAlign: "center" }}>
//                     <button
//                       className="btn btn-warning btn-sm"
//                       onClick={() => updateTodo(todo.id)}
//                     >
//                       Done
//                     </button>
//                     <button
//                       onClick={deleteTodo}
//                       id={todo.id}
//                       className="btn btn-danger btn-sm"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* /.card-body */}
//       </div>
//     </div>
//   );
// }

// export default Todos;
