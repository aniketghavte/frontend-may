import  WaitlistUser from '../../../models/waitlistUser.model.js'
// const GiveawayUser = mongoose.model('GiveawayUser');

import mongoose from 'mongoose';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      console.log(process.env.MONGODB_URI2);
      await mongoose.connect(process.env.MONGODB_URI2);
      console.log('Connected to MongoDB.');

      const { email, name, username, isUserNameSet } = req.body;

      if (!email || !name) {
        return { status: 500, data: { message: 'Invalid fields' } };
      }
      
      const existingUser = await WaitlistUser.findOne({ email });
      if (existingUser) {
        return { status: 400, data: { message: 'User already exists.' } };
      }
  
      const maxRankUser = await WaitlistUser.findOne().sort({ waitlistRank: -1 });
      // console.log(maxRankUser);
      const waitlistRank = maxRankUser ? maxRankUser.waitlistRank + 1 : 0;
  
      const user = new WaitlistUser({ email, name, waitlistRank, username, isUserNameSet });
      await user.save();

      res.status(201).json({ message: 'User Created', data: user });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error', error });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
