import { connect } from 'mongoose';

const connectToMongo = async () => {
  try {
    await connect(process.env.MONGO_DB_URI);

    console.log('Connected to Mongo DB');
  } catch (error) {
    console.log('Error connecting to MongoDB', error.message);
  }
};

export default connectToMongo;
