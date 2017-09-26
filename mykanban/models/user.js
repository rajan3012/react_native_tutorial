// DEPENDENCIES, ETCETERA
const mongoose = require('mongoose'),
  moment       = require('moment'),
  bcrypt       = require('bcrypt-nodejs');

const Schema = mongoose.Schema;

// SCHEMA DEFINITION
var UserSchema = Schema({
  u_email:    {type: String, required: true, unique: true},
  u_password: {type: String, required: true},
  u_settings: {type: Schema.ObjectId, ref: 'Setting'},
  u_created:  {type: Date, required: true, default: Date.now()}
});

// VIRTUAL PROPERTIES
// Pretty up the account creation date to a format that will be displayed
// like June 6, 2017
UserSchema.virtual('created_formatted').get(()=>{
  return moment(this.u_created).format('MMMM D, YYYY');
});

// METHODS
// Generate a hash
UserSchema.methods.generateHash = password => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
// Validate password
UserSchema.methods.validPassword = password => {
  return bcrypt.compareSync(password, this.local.password);
};

// EXPORT
module.exports = mongoose.model('User', UserSchema);
