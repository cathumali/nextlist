import { memes } from '../../utilities/data/memes';

export default (req, res) => {
  res.statusCode = 200
  res.json(memes)
}
