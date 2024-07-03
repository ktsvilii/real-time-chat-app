import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';
import { app, server } from './socket/socket.js';

import connectToMongo from './db/connectToMongo.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

// app.get('/', (req, res) => {
//   res.send('Hello world!');
// });

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/message', messageRoutes);
app.use('/api/users', userRoutes);

server.listen(PORT, () => {
  connectToMongo();
  console.log(`App is running on port ${PORT}`);
});
