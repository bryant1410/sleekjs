/**
 * Sample Model
 * 
 * @package Sleek.js
 * @version 1.0
 * @author Robin <robin@cubettech.com>
 * @Date 23-10-2013
 */

var Schema = mongoose.Schema;

//declare your schema
var userSchema = new Schema({
    author    : String
  , title     : String
});

//Register model
var PostModel = mongoose.model('User', userSchema, 'usercollections');

//write function here
exports.list = function(callback){
    PostModel.find(function (err, person) {
        if (err) return handleError(err);
        callback(person);
    });
}