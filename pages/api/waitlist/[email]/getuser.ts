import  WaitlistUser from '../../../../models/waitlistUser.model.js'
// const GiveawayUser = mongoose.model('GiveawayUser');

import mongoose from 'mongoose';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Connect to MongoDB
      console.log(process.env.MONGODB_URI2);
      await mongoose.connect(process.env.MONGODB_URI2);
      console.log('Connected to MongoDB.');

      const email = decodeURIComponent(req.url.split('/waitlist/')[1]);
      console.log(email);
      const user = await WaitlistUser.findOne({ email });

      if (!user) {
        res.status(404).json({ message: 'User not Found' });
      }

    res.status(201).json({ message: 'User Found', data: user });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error', error });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
