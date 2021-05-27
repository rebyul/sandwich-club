import * as express from 'express';
import { getAllMembers, getMemberById } from '../../mockstate';

const router = express.Router();

router.get('/', (req, res) => res.send({ members: getAllMembers() }));

router.get('/:id', (req, res) => {
  const id = +req.params.id;
  const member = getMemberById(id);
  res.send(member);
});

export default router;
