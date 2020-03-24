import connection from '../../database/connection';

class SessionController {
  async store(req, res) {
    const { ong_id } = req.body;

    const ong = await connection('ongs')
      .where('id', ong_id)
      .select('name')
      .first();
    if (!ong) {
      return res.status(401).json({ error: 'Ong not found' });
    }

    return res.json(ong);
  }
}

export default new SessionController();
