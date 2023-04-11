import { Schema, model } from "mongoose";

const artist = new Schema({
  firstName: {
    type: String,
    minLength: 2,
    require: true,
  },
  artistName: {
    type: String,
    minLength: 2,
    require: true,
  },
  genre: {
    type: String,
    minLength: 2,
    require: true,
  },
  age: {
    type: Number,
    min: 16,
    max: 95,
    require: true,
  },
  lastName: {
    type: String,
    minLength: 2,
    require: true,
  },
  totalSongs: {
    type: String,
    min: 0,
    max: 999,
  },
});
const Artist = model("Artist", artist);
export default Artist;
