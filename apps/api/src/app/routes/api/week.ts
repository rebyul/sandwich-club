import * as express from 'express';
import { allIngredients, membersByWeek } from '../../mockstate';

const router = express.Router();

/**
 * Things by week?
 * - get members
 * - enrol member
 * - get ingredients
 * - set ingredients?
 */
router.get('/:week/ingredients', (req, res) => {
  res.send({
    allIngredients,
  });
});

router.get('/:week/members', (req, res) => {
  const week = req.params.week;
  res.send({
    members: membersByWeek[week],
  });
});

router.post('/:week/enrol', (req, res) => {
  const { user } = req.body;
  const week = req.params.week;
  membersByWeek[week].push(user);
  res.sendStatus(200);
});

export default router;
