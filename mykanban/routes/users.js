// DEPENDENCIES, ETCETERA
var express = require('express');
var router = express.Router();

// REQUIRED CONTROLLERS
const user_controller = require('../controllers/userController');

// ROUTES
// GET request for user list
router.get('/', user_controller.user_list);

// GET request for a specified user's details
router.get('/user/:id', user_controller.user_details);

// GET request to create a new user
// TODO: Determine whether or not user creation should be routed here or in
// an auth router
router.get('/user/add', user_controller.add_user_get);

// POST request for processing the user creation form
router.get('/user/add', user_controller.add_user_post);

// GET request to delete user
router.get('/user/:id/delete', user_controller.delete_user_get);

// POST request to delete user
// NOTE: Possibly unnecessary?
router.post('/user/:id/delete', user_controller.delete_user_post);

// GET request to update user
router.get('/user/:id/update', user_controller.update_user_get);

// POST request to update user
router.get('/user/:id/update', user_controller.update_user_post);

// EXPORT
module.exports = router;
