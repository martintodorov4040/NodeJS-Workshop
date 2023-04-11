import songsServices from "../services/songsService.js";

export default class songsController {
  static async getSong(req, res) {
    try {
      const song = await songsServices.getSong(req.body);
      res.status(200).send(song);
    } catch (error) {
      res.status(500).send(error);
    }
  }
  static async addNewSong(req, res) {
    try {
      const song = await songsServices.addNewSong(req.body);
      res.status(200).send(song);
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
