import * as express from 'express';
import apiRoutes from './app/routes/api';

const app = express();
app.use(express.json());

app.use('/api', apiRoutes);

const port = process.env.port || 3001;
const server = app.listen(port, () => {
  console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);
