import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

import connectToMongo from './db/connecteToMongo.js';

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello world!');
// });

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  connectToMongo();
  console.log(`App is running on port ${PORT}`);
});
