import * as express from 'express';
import {
  addIngredient,
  enrolMember,
  getWeekThing,
  removeIngredient,
  withdrawMember,
} from '../../data/mockstate';

const router = express.Router();

router.get('/:week', (req, res) => {
  const week = +req.params.week;
  const weekThing = getWeekThing(week);
  res.send(weekThing);
});

router.get('/:week/ingredients', (req, res) => {
  const week = +req.params.week;
  const weekThing = getWeekThing(week);
  res.send({
    ingredients: weekThing.ingredients,
  });
});

router.post('/:week/ingredients/:ingredientId', (req, res) => {
  const week = +req.params.week;
  const ingredientId = +req.params.ingredientId;

  addIngredient(week, ingredientId);
  res.sendStatus(200);
});

router.delete('/:week/ingredients/:ingredientId', (req, res) => {
  const week = +req.params.week;
  const ingredientId = +req.params.ingredientId;

  removeIngredient(week, ingredientId);
  res.sendStatus(200);
});

router.get('/:week/members', (req, res) => {
  const week = +req.params.week;
  const weekThing = getWeekThing(week);
  res.send({
    members: [...weekThing.members.values()],
  });
});

router.post('/:week/members/:memberId', (req, res) => {
  const memberId = +req.params.memberId;
  const week = +req.params.week;

  enrolMember(week, memberId);
  res.sendStatus(200);
});

router.delete('/:week/members/:memberId', (req, res) => {
  const memberId = +req.params.memberId;
  const week = +req.params.week;

  withdrawMember(week, memberId);
  res.sendStatus(200);
});

export default router;
