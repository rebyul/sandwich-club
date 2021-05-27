import * as express from 'express';
import memberRoutes from './member';
import weekRoutes from './week';

const greeting = { message: 'Welcome to api!' };

const router = express.Router();

router.get('/', (req, res) => {
  res.send(greeting);
});

router.use('/members', memberRoutes);
router.use('/week', weekRoutes);

export default router;
