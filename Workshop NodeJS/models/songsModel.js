import { Schema, model } from "mongoose";

const songs = new Schema({
  name: {
    type: String,
    minLength: 2,
    require: true,
  },

  artist: {
    type: Schema.Types.ObjectId,
    ref: "Artist",
    require: true,
  },
  genre: {
    type: String,
    minLength: 2,
    require: true,
  },
});
const Songs = model("Songs", songs);
export default Songs;
