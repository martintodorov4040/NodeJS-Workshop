import artistServices from "../services/artist.service.js";
export default class artistController {
  static async getArtist(req, res) {
    try {
      const artist = await artistServices.getArtist(req.query.artstName);
      res.status(200).send(artist);
    } catch (error) {
      res.status(500).send(error);
    }
  }
  static async addnewArtist(req, res) {
    try {
      const artist = await artistServices.addnewArtist(req.body);
      res.status(200).send(artist);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
