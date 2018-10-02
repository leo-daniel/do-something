const router = require("express").Router();
const eventsController = require("../../controllers/eventsController");

// Endpoints for "api/events"
router.route("/")
  .get(eventsController.findAll);

// Endpoints for "api/events/:id"
router.route("/:id")
  .get(eventsController.findById)
  .put(eventsController.update);

// Endpoint for "api/events/register/:id"
router.route('/register/:id')
.patch(eventsController.register);  

// Endpoint for "api/events/:id/unregister"
router.route('/:id/unregister')
.patch(eventsController.unregister);  

module.exports = router;