// import React, { useState, useEffect } from "react";
// import Axios from "axios";

// const TodoComplete = ({ userToken }) => {
//   const [todosCompleted, setTodosCompleted] = useState([]);

//   useEffect(() => {
//     getCompletedTodos();
//   }, []);

//   const getCompletedTodos = () => {
//     // console.log(filter);
//     Axios.get(
//       "http://localhost:3000/users/todos/completed/" + userToken.data.token
//     ).then((res) => {
//       setTodosCompleted(res.data);
//     });
//   };



//   return (
//     <div className="col-md-6">
//       <div className="card">
//         <div className="card-header">
//           <div className="row">
//             <div className="col-md-6">
//               <h3>Task Completed</h3>
//             </div>

//             <div className="form-group col-md-4"></div>
//             <div className="col-md-4">
//               <div className="input-group mb-3"></div>
//             </div>
//           </div>
//         </div>
//         {/* /.card-header */}

//         <div className="card-body p-0">
//           <table className="table">
//             <thead>
//               <tr>
//                 <th style={{ width: "10px" }}></th>
//                 <th style={{ width: "290px", textAlign: "center" }}>
//                   Complete Task
//                 </th>
//                 <th style={{ width: "10px" }}></th>
//               </tr>
//             </thead>

//             <tbody>
//               {todosCompleted.map((todo, id) => (
//                 <tr key={todo.id}>
//                   <td></td>
//                   <td style={{ width: "200px", textAlign: "center" }}>
//                     {todo.todo}
//                   </td>
//                   <td></td>
                  
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>

//         {/* /.card-body */}
//       </div>
//     </div>
//   );
// };

// export default TodoComplete;
