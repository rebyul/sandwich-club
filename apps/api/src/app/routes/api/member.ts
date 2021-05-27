import * as express from 'express';
import { allMembers } from '../../mockstate';

const router = express.Router();

router.get('/', (req, res) => res.send({ members: allMembers }));

router.get('/:id', (req, res) => {
  const id = +req.params.id;
  const member = allMembers.find((m) => m.id === id);
  res.send(member);
});

export default router;
