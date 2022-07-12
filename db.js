require("dotenv").config();
//importing mongoose
const mongoose = require("mongoose");
//taking mongourl from env file
const mongoUrl = process.env["MONGO_URI"];
// console.log(mongoUrl)
//connecting mongodb database
mongoose.connect(mongoUrl);
const connection = mongoose.connection;

//for checking our connection is done or not
connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

const Schema = mongoose.Schema;
//creating a schema
const BLEdataSchema = new Schema({
  mac_id: {type:String,require:true},
  timestamp: {type:Date,require:true},
  deviceName:{type:String},
  manufactureName:{type:String},
  location:{
    latiitude: Number,
    longitude: Number,
  },
  Data:[
    {
      CharactersName:{type:String},
      value:{type:String}
    }
  ]

});

const BleData = mongoose.model("BLEdata", BLEdataSchema);
// console.log("hello repl what are you doing")

const createAndSaveData = (done) => {
  const newData = new BleData({name:'Karan Janthe',age:18,favoriteFoods:['dabeli','vadapav',"icecream"]});

  newData.save(function(err,data){
    //if there is error than show the error in console else save the sata
    if(err) return  console.error(err);
    done(null,data);

  });
};


const createManyData = (arrayOfPeople, done) => {
  done(null /*, data*/);
};


exports.BleDataModel = BleData;
exports.createAndSaveData = createAndSaveData;
exports.createManyData = createManyData;
