const express = require("express");
const app = express();
const subscriberModel = require("./models/subscribers");
const path = require("path");

// Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// User is displayed with a homepage describing how to use various API requests
app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});



// Displays an array of all subscribers from the database
app.get("/subscribers", async (request, response) => {
  //To retrieve records from a database collection we make use of the .find() function.
  const subscribers = await subscriberModel.find({});
  try {
    //Since no parameters have been provided, it will return all of the items in the database.
    response.send(subscribers);
  } catch (error) {
    //send error if route not found
    response.status(404).send(error);
  }
});


// Displays an array of subscribers name and subscribed Channel from the database
app.get("/subscribers/name", async (req, res) => {
  try {
    //To retrieve selected records from a database collection we make use of the .find().select() function.
    const subscribers = await subscriberModel.find().select({
      name: 1,
      subscribedChannel: 1,
      _id: 0,
    });
    res.send(subscribers);
  } catch (err) {
    res.status(404).send(error);
  }
});



// Displays a particular subscriber from the database using _id
app.get("/subscribers/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    //mongoose findById() function to find a single document by its _id field.
    const subscriberData = await subscriberModel.findById(_id);

    // console.log(subscriberData);
    res.send(subscriberData);
  } catch (err) {
    // An error message when the subscriber is not found for the searching id.
    res.status(400).send({ message: "Error! Subscriber Id does not exist" });
  }
});



// Add new subscriber using postman ir insomnia
app.post("/subscribers/add", async (req, res) => {
  //creating a new subscriber as  subscribel model is defined in model
  const subscriber = new subscriberModel({
    name: req.body.name,
    subscribedChannel: req.body.subscribedChannel,
  });
  try {
    // use .save() to save it to the database.
    const newSubscriber = await subscriber.save();
    //response send to the database
    res.status(201).json({ newSubscriber });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});



// To delete any subscriber using the id 
app.delete("/subscribers/delete/:id", async (req, res) =>{
  try{

    //deleteOne() method to easily remove one record from the database
      await subscriberModel.deleteOne({_id:req.params.id})
      res.status(200)
  res.send({message:"subscriber deleted succesfully"})  //When deleted show a custom message
  } catch{
      res.status(400);
      res.send({error:"subscriber does not exist"})  //When id is not found
  }
});



module.exports = app;
