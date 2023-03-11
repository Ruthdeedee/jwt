const mongoose = require("mongoose");



exports.connect = () => {
  const username = "adetolaemeya";
const password = "Sapio2023";



  // Connecting to the database
  mongoose
    .connect(`mongodb+srv://${username}:${password}@cluster0.skxfqpa.mongodb.net/?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      /*useCreateIndex: true,*/
     /* useFindAndModify: false,*/
    })
    .then(() => {
      console.log("Successfully connected to database");
    })
    .catch((error) => {
      console.log("database connection failed. exiting now...");
      console.error(error);
      process.exit(1);
    });
};