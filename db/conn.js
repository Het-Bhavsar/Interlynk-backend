
//importing mongoose
const mongoose = require("mongoose");
//taking mongourl from env file

// console.log(mongoUrl)

module.exports = {
  connectToServer: function () {
    //connecting mongodb database
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}.uem2k.mongodb.net/?retryWrites=true&w=majority`);
const connection = mongoose.connection;

//for checking our connection is done or not
connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

  return;
  },

};
