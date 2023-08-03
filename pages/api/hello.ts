const connectMongoDB = require('../../config/mongo');
import  GiveawayUser, { IGiveawayUser }  from '../../models/GiveawayModel'
// const GiveawayUser = mongoose.model('GiveawayUser');

import mongoose from 'mongoose';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Connect to MongoDB
      console.log(process.env.MONGODB_URI);
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('Connected to MongoDB.');
      console.log(req.body)
        const { userEmail, twitterLink } = req.body;
        console.log(userEmail, twitterLink);

        const newGiveawayUser: IGiveawayUser = new GiveawayUser({
          userEmail: userEmail,
          twitterLink: twitterLink,
        });

        await newGiveawayUser.save();
        res.status(201).json({ message: 'Giveaway User Created', data: newGiveawayUser });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error', error });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
