const mongoose = require('mongoose');
require('dotenv').config();
mongoose.set('strictQuery',false);
// mongoose.connect('mongodb://localhost/IssueTracker')
// .then(
// () => {console.log("Database connected successfully")},
// (err) => {console.log("error occuring while database connecting",err)}
// );


mongoose.connect(process.env.MongodbUrl)
.then(
() => {console.log("Database connected successfully")},
(err) => {console.log("error occuring while database connecting",err)}
);

module.exports = mongoose;