const connectMongoDB = require('../../../config/mongo');
import  TreasureBounty, { ITreasureBounty }  from '../../../models/TreasureBountyModel'
// const TreasureBounty = mongoose.model('TreasureBounty');

import mongoose from 'mongoose';

export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        console.log(process.env.MONGODB_URI);
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB.');
        console.log(req.body)
          const { title, desc, criteria, note, date, banner } = req.body;
          // console.log(userEmail, twitterLink);
  
          const newTreasureBounty: ITreasureBounty = new TreasureBounty({
            title: title,
            desc: desc,
            criteria: criteria,
            note: note,
            date: date,
            banner: banner,
          });
  
          await newTreasureBounty.save();
          res.status(201).json({ message: 'Treasure Bounty Created', data: newTreasureBounty });
    
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error', error });
      }
    } else if(req.method === 'GET') {
      console.log(process.env.MONGODB_URI);
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('Connected to MongoDB.');
      console.log("req.body>>>>>>>>>", req.body);
      const allBounties: ITreasureBounty[] = await TreasureBounty.find({});
  
      res.status(201).json({ message: 'get All Bounties', data: allBounties });
  
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }