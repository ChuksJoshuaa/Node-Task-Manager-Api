const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    //You do not need to this if you are using the latest version, the latest version will eliminate the depreciation warnings..
  });
};

module.exports = connectDB;
