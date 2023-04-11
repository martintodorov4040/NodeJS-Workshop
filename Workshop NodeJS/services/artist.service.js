import Artist from "../models/artistModel.js";

export default class artistService {
  static async getArtist(artistName) {
    const artist = await Artist.find({ artistName: artistName });
    return artist;
  }
  static async addNewArtist(artistData) {
    const artist = new Artist(artistData);

    const createdArtist = await artist.save();

    return createdArtist;
  }
}
