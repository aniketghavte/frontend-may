const connectMongoDB = require('../../../../config/mongo');
import  TreasureBountySubmissions, { ITreasureBountySubmissions }  from '../../../../models/TreasureBountySubmissions'
// const TreasureBountySubmissions = mongoose.model('TreasureBountySubmissions');

import mongoose from 'mongoose';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // Connect to MongoDB
      console.log(process.env.MONGODB_URI);
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('Connected to MongoDB.');
      console.log(req.body)
        const { bountyId, userEmail, twitterLink } = req.body;
        console.log(">>>>>>>>>>><<<<",bountyId,userEmail, twitterLink);

        const newTreasureBountySubmissions: ITreasureBountySubmissions = new TreasureBountySubmissions({
            treasureBountyId: bountyId,
            userEmail: userEmail,
            twitterLink: twitterLink,
        });

        await newTreasureBountySubmissions.save();
        res.status(201).json({ message: 'Giveaway User Created', data: newTreasureBountySubmissions });
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error', error });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}