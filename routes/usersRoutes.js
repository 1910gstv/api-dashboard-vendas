const { Router } = require("express");
const { authenticate, getAllUsers } = require("../controllers/UserControllers");
const { auth } = require("../middleware/AuthController");
const cors = require("cors");
const express = require("express");
const app = express();

const router = Router();

app.use(cors());

router.post("/authenticate", authenticate);
router.get("/users", auth, getAllUsers);

module.exports = router;
