const rethinkdbdash = require("rethinkdbdash");

module.exports = rethinkdbdash({
  host: DB_HOST,
  port: DB_PORT,
  db: DB_NAME,
});







// app.get("/api/users", (req, res) => {
//   r.table("users").run(connection),
//     (err, cursor) => {
//       cursor.toArray((err, result) => {
//         if (err) throw err;
//         res.json(result);
//       });
//     };
// });

// app.all("/api/user", (req, res) => {
//   console.log(req.body.users);
//   console.log(req.body.password);
//   r.table("users")
//     .filter({ username: req.body.username, password: req.body.password })
//     .run(connection, (err, cursor) => {
//       cursor.toArray((err, result) => {
//         if (err) throw err;
//         res.json(result);
//         console.log(result[0].password);
//       });
//     });
// });

// app.all("/api/add", (req, res) => {
//   r.table("users")
//     .insert({ username: req.body.username, password: req.body.password })
//     .run(connection, (err, result) => {
//       if (err) throw err;
//       res.json(result);
//     });
// });
