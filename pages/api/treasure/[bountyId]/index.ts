import  TreasureBounty, { ITreasureBounty }  from '../../../../models/TreasureBountyModel'
// const TreasureBounty = mongoose.model('TreasureBounty');

import mongoose from 'mongoose';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        res.status(405).json({ message: 'Method Not Allowed' });
    } else if(req.method === 'GET') {
      console.log(process.env.MONGODB_URI);
      await mongoose.connect(process.env.MONGODB_URI);
      const _id = decodeURIComponent(req.url.split('/treasure/')[1]);
      console.log("_id>>>>>>>>>", _id);
      // const allBounties: ITreasureBounty[] = await TreasureBounty.find({_id: _id});
  
      const bounty: ITreasureBounty | null = await TreasureBounty.findOne({ _id: _id });
      res.status(201).json({ message: 'get All Bounties', data: bounty });
  
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  }