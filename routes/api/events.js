const router = require('express').Router();
const eventsController = require('../../controllers/eventsController');

// Endpoints for "api/events"
router.route('/').get(eventsController.findAll);

// Endpoint for "api/events/:id"
router.route('/:id').get(eventsController.findById);

// Endpoint for "api/events/:id/register"
router.route('/:id/register').patch(eventsController.register);

module.exports = router;
