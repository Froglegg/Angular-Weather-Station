const mongoose = require("mongoose");

const locationSchema = mongoose.Schema({
  country: {
    type: String,
    required: true,
    trim: true
  },
  locality: {
    type: String,
    required: true,
    trim: true
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

const Locations = mongoose.model("Locations", locationSchema);

module.exports = Locations;
