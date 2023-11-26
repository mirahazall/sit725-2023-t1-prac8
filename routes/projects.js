
const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projectsController');

// Define a route to handle form submissions
router.post('/submit-form', projectsController.submitForm);

// Define a route to get projects
router.get('/', (req, res) => {
    res.json({ statusCode: 200, data: '${FormData}', message: 'Success' });
});

module.exports = router;


