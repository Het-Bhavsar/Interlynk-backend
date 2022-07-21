const express = require('express');

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /listings.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require('../db/conn');
recordRoutes.get("/hello",(req,res)=>{
  res.send("hello");
})
// This section will help you get a list of all the records.
recordRoutes.route('/user').post(async function (req, res) {
  const dbConnect = dbo.getDb();
  console.log("hello from user route");
  const userDocument={
    key:req.body.key,
    last_modified: new Date(),
    wallet:req.body.walletInfo,
    walletAddres:req.body.walletAddres,
    userInfo:req.body.userInfo

  }
  dbConnect
    .collection('users')
    .find({walletAddres: req.body.walletAddres})
    .then((result)=>{
      if(result){
        res.send({msg:"user already exist",result})
      }else{
        dbConnect
        .collection('users')
        .insertOne(userDocument, function (err, result) {
          if (err) {
            res.status(400).send('Error inserting matches!');
          } else {
            console.log(`Added a new match with id ${result.insertedId}`);
            res.send("created new user");
          }
        });
      }
    })
    

    
    });


// This section will help you create a new record.
// recordRoutes.route('/user').post(function (req, res) {
//   const dbConnect = dbo.getDb();
//   const matchDocument = {
//     listing_id: req.body.id,
//     last_modified: new Date(),
//     session_id: req.body.session_id,
//     direction: req.body.direction,
//   };

//   dbConnect
//     .collection('matches')
//     .insertOne(matchDocument, function (err, result) {
//       if (err) {
//         res.status(400).send('Error inserting matches!');
//       } else {
//         console.log(`Added a new match with id ${result.insertedId}`);
//         res.status(204).send();
//       }
//     });
// });

// This section will help you update a record by id.
recordRoutes.route('/listings/updateLike').post(function (req, res) {
  const dbConnect = dbo.getDb();
  const listingQuery = { _id: req.body.id };
  const updates = {
    $inc: {
      likes: 1,
    },
  };

  dbConnect
    .collection('listingsAndReviews')
    .updateOne(listingQuery, updates, function (err, _result) {
      if (err) {
        res
          .status(400)
          .send(`Error updating likes on listing with id ${listingQuery.id}!`);
      } else {
        console.log('1 document updated');
      }
    });
});

// This section will help you delete a record.
recordRoutes.route('/listings/delete/:id').delete((req, res) => {
  const dbConnect = dbo.getDb();
  const listingQuery = { listing_id: req.body.id };

  dbConnect
    .collection('listingsAndReviews')
    .deleteOne(listingQuery, function (err, _result) {
      if (err) {
        res
          .status(400)
          .send(`Error deleting listing with id ${listingQuery.listing_id}!`);
      } else {
        console.log('1 document deleted');
      }
    });
});

module.exports = recordRoutes;
