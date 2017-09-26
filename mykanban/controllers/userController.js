// DEPENDENCIES
const async   = require('async'),
      util    = require('util');

// MODELS
const Setting = require('../models/setting'),
      User    = require('../models/user');

// METHODS
// Get a specific User
exports.user_details = (req,res,next) => {
  console.log('The user_details method has fired.');
  //User.find({'email': req.params.email},(err,user)=>{
  User.findById(req.params.id, (err,user)=>{
    if (err) {return next(err);}
    // NOTE: Delete this before production
    console.log('User details retrieval successful!');
    console.log("User: " + util.inspect(user));
    res.send(user);
  });
};

// Get list of all Users
exports.user_list = (req,res,next) => {
  console.log('The user_list method has fired.');
  User.find().sort([['email', 'ascending']]).exec((err, list_users)=>{
    if (err) {return next(err);}
    console.log('User list retrieval successful!');
    console.log("All Users: " + util.inspect(list_users));
    res.send(list_users);
  });
};

// Display delete user page (or prompt?)
exports.delete_user_get = (req,res) => {
  console.log('The delete_user_get method has fired.');
  User.findByIdAndRemove(req.params.id).exec(function(err,user){
    if (err) {return next(err);}
    console.log('Deleting user: ' + util.inspect(user));
    res.send('User ' + user.u_email + ' deleted.');
  });
};

// Process user deletion
// NOTE: Unnecessary?
exports.delete_user_post = (req,res) => {
  res.send("delete_user_post method not yet implemented. Stay tuned!");
};

// Add user (or should this go in authController?)
// Display user creation page (signup, basically?)
exports.add_user_get = (req,res) => {
  res.send("add_user_get method not yet implemented. Stay tuned!");
};

// Process the user creation form
exports.add_user_post = (req,res) => {
  res.send("add_user_post method not yet implemented. Stay tuned!");
};

// Update user
exports.update_user_get = (req,res) => {
  res.send("update_user_get not yet implemented. Stay tuned!");
};

// Update user
exports.update_user_post = (req,res)=> {
  res.send("update_user_post not yet implemented. Stay tuned!");
};
