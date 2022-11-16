const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controller/userController");

// Routes for getting all users and post
router.route("/").get(getAllUsers).post(createUser);

// Router for getting, updating and deleting a single thoughts by Id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// Route for adding and deleting a friend
router.route("/:id/friends/:friendsId").post(addFriend).delete(removeFriend);

module.exports = router;