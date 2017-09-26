console.log('This script populates the database with some user, task, time, and settings objects.');
console.log('To seed the db with this test data, run the following command from the command line from within the mykanban project folder:');
console.log('node dbseed.js mongodb://127.0.0.1:3003/mkbdb');
console.log('If seeded before, run drop the database first before running the seed script again.');

// Arguments passed on command line
// TODO: Make sure this also supports remote mongodb connection strings
var userArgs = process.argv.slice(2);
if (!userArgs[0].startsWith('mongodb://')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}

/*** REQUIRED ***/
const async   = require('async'),
  util        = require('util'),
  mongoose    = require('mongoose');

/*** MODELS ***/
const Setting = require('./models/setting'),
  Task        = require('./models/task'),
  Time        = require('./models/time'),
  User        = require('./models/user');

/*** DATABASE ***/
const mongoDB = userArgs[0];
mongoose.connect(mongoDB);
const db = mongoose.connection;
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

/*** INITIALIZE ARRAYS ***/
var settings = [];
var tasks    = [];
var times    = [];
var users    = [];

// FUNCTIONS
// create user
// params: email (String),
// password (String),
// settings (Settings object),
// created (Date),
// cb (callback function)
// returns User object or error
function createUser(email,password, settings, created, cb) {
  newUserDetails = {
    u_email:    email,
    u_settings: settings,
    u_created: created
  };

  var user = new User(newUserDetails);
  user.u_password = user.generateHash(password);

  user.save(function(err){
    if (err) {
      cb(err,null);
      return;
    }
    // TODO: Delete console log before production
    console.log("New User: " + util.inspect(user));
    users.push(user);
    cb(null,user);
  });
};

// settings creation function
// params: num_tasks_doing (Number),
// col_1_heading (String),
// col_2_heading (String),
// col_3_heading (String),
// cb (callback function)
function createSettings(num_tasks_doing, col_1_heading, col_2_heading, col_3_heading, cb) {
  newSettingsDetails = {
    num_tasks_doing: num_tasks_doing,
    col_1_heading:   col_1_heading,
    col_2_heading:   col_2_heading,
    col_3_heading:   col_3_heading
  };

  const newSettings = new Setting(newSettingsDetails);
  newSettings.save(function(err){
    if (err) {
      cb(err,null);
      return;
    }
    // TODO: Delete console log before production
    console.log("New Settings Object: " + util.inspect(newSettings));
    settings.push(newSettings);
    cb(null,newSettings);
  });
};
/*
function createSettings(cb) {
  async.series([
    function(callback) {
      createSettings(3,'To Do','In Progress','Done', callback);
    },
    function(callback) {
      createSettings(4,'To Do','Doing','Done', callback);
    },
    function(callback) {
      createSettings(5,'Future','Present','Past', callback);
    },
    function(callback) {
      createSettings(3,'1','2','3', callback);
    },
    function(callback) {
      createSettings(4,'To Do','Doing','Done', callback);
    },
  ], cb);
};
function createUsers(cb) {
  async.series([
    function(callback) {
      createUser('barkley.puppington@woofmail.com', 'ruhroh', settings[0], Date.now(), callback);
    },
    function(callback) {
      createUser('shelley.turtlepond@slowmail.net', 'password', settings[1], Date.now(), callback);
    },
    function(callback) {
      createUser('example@example.com', 'Pa55w0rd!', settings[2], Date.now(), callback);
    },
    function(callback) {
      createUser('test@test.com','Testing123', settings[3], Date.now(), callback);
    },
    function(callback) {
      createUser('pamela.pammerson@pammail.com','pam', settings[4], Date.now(), callback);
    },
  ],cb);
};
*/
function seedData(cb) {
  async.series([
    function(callback) {
      createSettings(3,'To Do','In Progress','Done', callback);
    },
    function(callback) {
      createSettings(4,'To Do','Doing','Done', callback);
    },
    function(callback) {
      createSettings(5,'Future','Present','Past', callback);
    },
    function(callback) {
      createSettings(3,'1','2','3', callback);
    },
    function(callback) {
      createSettings(4,'To Do','Doing','Done', callback);
    },
    function(callback) {
      createUser('barkley.puppington@woofmail.com', 'ruhroh', settings[0], Date.now(), callback);
    },
    function(callback) {
      createUser('shelley.turtlepond@slowmail.net', 'password', settings[1], Date.now(), callback);
    },
    function(callback) {
      createUser('example@example.com', 'Pa55w0rd!', settings[2], Date.now(), callback);
    },
    function(callback) {
      createUser('test@test.com','Testing123', settings[3], Date.now(), callback);
    },
    function(callback) {
      createUser('pamela.pammerson@pammail.com','pam', settings[4], Date.now(), callback);
    },
  ],cb);
};

async.series([
  // createSettings,
  // createUsers
  seedData
],
// optional callback
function(err, results) {
  if (err) {
      console.log('FINAL ERR: '+err);
  }
  else {
    console.log('Settings: ' + util.inspect(settings));
    console.log('Users: '+ util.inspect(users));
  }
  //All done, disconnect from database
  mongoose.connection.close();
});
