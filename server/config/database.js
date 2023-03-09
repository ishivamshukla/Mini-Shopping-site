const mongoose = require('mongoose');
const { MONGODB_URI } = require('../utils/constants');

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('MongoDB connected!');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;


// const mongoose = require('mongoose');
// const { DB_URI } = require('../utils/constants');

// mongoose.connect(DB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useFindAndModify: false,
//   useCreateIndex: true
// });

// const connection = mongoose.connection;

// connection.once('open', () => {
//   console.log('MongoDB database connection established successfully');
// });

// connection.on('error', () => {
//   console.log('MongoDB connection error. Please make sure MongoDB is running.');
//   process.exit();
// });
