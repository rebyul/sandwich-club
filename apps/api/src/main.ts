import * as express from 'express';

const app = express();
app.use(express.json());

const greeting = { message: 'Welcome to api!' };

app.get('/api', (req, res) => {
  res.send(greeting);
});

const port = process.env.port || 3001;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);

type Ingredient = string;
type Member = {
  name: string;
  id: number;
};

const ingredients: Ingredient[] = ['Bread', 'Cheese', 'Lettuce', 'Tomato Sauce'];
const allMembers: Member[] = [
  {
    id: 1,
    name: 'Kelvin',
  },
];

const membersByWeek: { [week: string]: Member[] } = {
  week21: [],
};

const currentWeek = 'week21';

// Member
app.get('/api/members', (req, res) => res.send({ members: allMembers }));
app.get('/api/members/:id', (req, res) => {
  const id = +req.params.id;
  const member = allMembers.find((m) => m.id === id);
  res.send(member);
});

/**
 * Things by week?
 * - get members
 * - enrol member
 * - get ingredients
 * - set ingredients?
 */
app.get('/api/week/:week/ingredients', (req, res) => {
  res.send({
    ingredients,
  });
});

app.get('/api/week/:week/members', (req, res) => {
  const week = req.params.week;
  res.send({
    members: membersByWeek[week],
  });
});

app.post('/api/week/:week/enrol', (req, res) => {
  const { user } = req.body;
  const week = req.params.week;
  membersByWeek[week].push(user);
  res.sendStatus(200);
});
