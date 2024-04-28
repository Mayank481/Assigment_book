const mongoose = require("mongoose");
const user = require("../model/user.model");
const bookmodel = require("../model/book.model");

module.exports.allbook = async () => {
  const data = await bookmodel.find().populate({
    path: "Author",
  });
  return data;
};

module.exports.postbook = (bookdata) => {
  const userid = mongoose.Types.ObjectId(bookdata.info.Author);
  const bookinfo = {
    Title: bookdata.info.booktittle,
    Price: bookdata.info.Price,
    PublisheOn: bookdata.info.nop,
    Author: userid,
    Status: "Pending",
    View: "Public",
  };
  try {
    bookmodel(bookinfo).save();
  } catch (error) {}
};

module.exports.approvebookdata = async (bookdata) => {
  const userid = mongoose.Types.ObjectId(bookdata.uid);
  try {
    const updatedata = await bookmodel.findById(userid);
    updatedata.Status = "approve";
    updatedata.save();
  } catch (error) {}
};

module.exports.getrecord = async (bookdata) => {
  const userid = mongoose.Types.ObjectId(bookdata.Author);
  try {
    const data = await bookmodel.find({ Author: userid });
    return data ;
  } catch (error) {
    return error;
  }
};

module.exports.deleterecord = async (bookdata) => {
  const userid = mongoose.Types.ObjectId(bookdata.Author);
  try {
    const data = await bookmodel.deleteOne({
      Author: userid,
      Title: bookdata.Title,
      Price: bookdata.Price,
    });
  } catch (error) {
    return error;
  }
};

module.exports.getprivacy = async (bookdata) => {
  const userid = mongoose.Types.ObjectId(bookdata._id);
  try {
    const data = await bookmodel.findById(userid);
    data.View = bookdata.privacy;
    data.save();
  } catch (error) {
    console.log(err);
  }
};
