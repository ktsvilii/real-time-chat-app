import User from '../models/user.model';

export const getAllUsers = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select(['-password', '-gender']);

    res.status(200).json(filteredUsers);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};