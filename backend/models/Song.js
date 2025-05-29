const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  url: { type: String, required: true }, // audio file or streaming URL
  coverImage: { type: String }           // optional album art
});

module.exports = mongoose.model("Song", songSchema);
