const router = require("express").Router();
const UserModel = require("../models/users");

router.get("/", async (req, res) => {
  try {
    const users = await UserModel.getAll();
    return res.send(users);
  } catch (e) {
    return res.status(500).send({
      message: "Internal Server Error",
    });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await UserModel.getById(req.params.id);

    if (!user) {
      return res.status(400).send({
        message: "user does not exists.",
      });
    }
    return res.status(200).send({
      data: user,
    });
  } catch (e) {
    {
      return res.status(500).send({
        message: "Internal Server Error",
      });
    }
  }
});

router.post("/register", async (req, res) => {
  try {
    const { inserted } = await UserModel.createUser(req.body);

    return res.send({
      created: !!inserted,
    });
  } catch (e) {
    return res.status(500).send({
      message: "Internal Server Error",
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UserModel.loginUser(username, password);

    console.log(user);
    return res.status(200).send({
      username,
      password,
    });
  } catch (e) {
    return res.status(500).send({
      message: "Internal Server Error",
    });
  }
});

module.exports = router;
