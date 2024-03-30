const express = require("express");
const router = express.Router();

const users = [
  {
    id: 1,
    fullname: "Padiphan Prempree",
    avatar:
      "https://static.wixstatic.com/media/05cbe9_aeb8fb18f18d40df9932bc27ccc83e09~mv2.jpg/v1/crop/x_26,y_0,w_669,h_960/fill/w_602,h_864,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/256362907_4931170123562350_9000816325215366370_n.jpg",
  },
  {
    id: 2,
    fullname: "Apple Watch",
    avatar:
      "https://www.flashfly.net/wp/wp-content/uploads/2022/05/FTX1B5hWIAA6GRr-2-800x600.jpeg",
  },
];

/**
 * @swagger
 * /user/login:
 *   post:
 *     tags: [User]
 *     summary: Authenticate user.
 *     description: Authenticate user with provided credentials.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User authenticated successfully.
 *       401:
 *         description: Unauthorized. Invalid credentials.
 */
router.post("/user/login", function (req, res) {
  const { username, password } = req.body;
  const id = 1; //รหัส User 1
  // Validate username and password (example: check against database)
  if (username === "Stuncreep" && password === "Stuncreep") {
    // Authentication successful
    res
      .status(200)
      .json({ id: id, message: "User authenticated successfully" });
  } else {
    // Authentication failed
    res
      .status(401)
      .json({ id: 0, message: "Unauthorized. Invalid credentials." });
  }
});

/**
 * @swagger
 * /user/{id}:
 *   get:
 *     tags: [User]
 *     summary: Get a user by ID.
 *     description: Retrieve a blog by its ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Numeric ID of the user to retrieve.
 *     responses:
 *       200:
 *         description: A single user object.
 *       404:
 *         description: user not found.
 */
router.get("/user/:id", (req, res) => {
  const { id } = req.params;
  const result = users.find((rs) => rs.id === parseInt(id));
  // console.log(id);
  res.json(result);
});

module.exports = router;
