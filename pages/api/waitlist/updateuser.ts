import  WaitlistUser from '../../../models/waitlistUser.model.js'
// const GiveawayUser = mongoose.model('GiveawayUser');

import mongoose from 'mongoose';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      console.log(process.env.MONGODB_URI2);
      await mongoose.connect(process.env.MONGODB_URI2);
      console.log('Connected to MongoDB.');

      const { email, updatedData } = req.body;

      const user = await WaitlistUser.findOne({ email });
  
      if (!user) {
        return { status: 404, data: { message: 'User not found.' } };
      }

      if (updatedData.username && updatedData.username !== user.username) {
        const existingUser = await WaitlistUser.findOne({ username: updatedData.username});
        if (existingUser) {
          return { status: 409, data: { message: 'Username already exists.' } };
        }
      }
      // console.log(updatedData)
      // Update the user data with the provided values
      Object.assign(user, updatedData);
  
      await user.save(); // Save the updated user object

      res.status(201).json({ message: 'User Created', data: user });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error', error });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
