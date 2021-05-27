import * as express from 'express';
import { getAllIngredients } from '../../mockstate';
import memberRoutes from './member';
import weekRoutes from './week';

const greeting = { message: 'Welcome to api!' };

const router = express.Router();

router.get('/', (req, res) => {
  res.send(greeting);
});

router.get('/ingredients', (req, res) =>
  res.send({
    ingredients: getAllIngredients(),
  })
);

router.use('/members', memberRoutes);
router.use('/week', weekRoutes);

export default router;
