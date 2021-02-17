// import React from "react";

// class Users extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       users: [{}],
//     };
//   }

//   componentDidMount() {
//     fetch("/users")
//       .then((res) => res.json())
//       .then((users) =>
//         this.setState({ users }, () => console.log("Users fetched...", users))
//       );
//   }
//   render() {
//     return (
//       <div>
//         <h2>Users</h2>
//         <ul>
//           {this.state.users.map((users) => (
//             <li>
//               Username: {users.username} &nbsp;
//               Password: {users.password}
//             </li>
//            ))} 
//         </ul>
//       </div>
//     );
//   }
// }
// export default Users;