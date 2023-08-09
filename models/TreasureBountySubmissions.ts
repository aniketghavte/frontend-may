// Import necessary modules
import { Schema, model, models, Model, Document } from 'mongoose';

// Define the IUserProfile interface
export interface ITreasureBountySubmissions extends Document {
    treasureBountyId: Schema.Types.ObjectId;
    userEmail: string;
    twitterLink: string;
}

const TreasureBountySubmissions: Model<ITreasureBountySubmissions> =
  models.TreasureBountySubmissions ||
  model<ITreasureBountySubmissions>(
    'TreasureBountySubmissions',
    new Schema({
        userEmail: {
            type: String,
            required: true,
        },
        treasureBountyId: {
            type: Schema.Types.ObjectId,
            ref: 'TreasureBounty',
            required: true,
        },
        twitterLink: {
            type: String,
            required: true,
        },
    })
  );

export default TreasureBountySubmissions;
