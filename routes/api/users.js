const router = require("express").Router();
const usersController = require("../../controllers/usersController");

// Endpoints for "api/users"
router.route("/")
  .get(usersController.findAll)
  .post(usersController.create);

// Endpoints for "api/users/:id"
router.route("/:id")
  .get(usersController.findById)
  .put(usersController.update);

module.exports = router;