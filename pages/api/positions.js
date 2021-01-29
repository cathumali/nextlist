import { positions } from '../../utilities/data/positions';

export default (req, res) => {
  res.statusCode = 200
  res.json(positions)
}
