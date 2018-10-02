const router = require('express').Router();
const eventsController = require('../../controllers/eventsController');

// Endpoints for "api/events"
router.route('/').get(eventsController.findAll);

// Endpoints for "api/events/:id"
router.route('/:id').get(eventsController.findById);

module.exports = router;
