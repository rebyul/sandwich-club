import * as express from 'express';
import { addIngredient, getWeekThing, removeIngredient } from '../../mockstate';

const router = express.Router();

router.get('/:week', (req, res) => {
  const week = +req.params.week;
  const weekThing = getWeekThing(week);
  res.send(weekThing);
});

/**
 * Things by week?
 * - get members
 * - enrol member
 * - get ingredients
 * - set ingredients?
 */
router.get('/:week/ingredients', (req, res) => {
  const week = +req.params.week;
  const weekThing = getWeekThing(week);
  res.send({
    ingredients: weekThing.ingredients,
  });
});

router.post('/:week/ingredients/:ingredient', (req, res) => {
  const week = +req.params.week;
  const ingredient = req.params.ingredient;

  addIngredient(week, ingredient);
  res.sendStatus(200);
});

router.delete('/:week/ingredients/:ingredient', (req, res) => {
  const week = +req.params.week;
  const ingredient = req.params.ingredient;

  removeIngredient(week, ingredient);
  res.sendStatus(200);
});

router.get('/:week/members', (req, res) => {
  const week = +req.params.week;
  const weekThing = getWeekThing(week);
  res.send({
    members: weekThing.members,
  });
});

router.post('/:week/enrol', (req, res) => {
  const { user } = req.body;
  const week = +req.params.week;
  const weekThing = getWeekThing(week);
  weekThing.members.push(user);
  res.sendStatus(200);
});

export default router;
