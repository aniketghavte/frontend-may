// Import necessary modules
import { Schema, model, models, Model, Document } from 'mongoose';

// Define the IUserProfile interface
export interface ITreasureBounty extends Document {
  title: string;
  desc: Array<string>;
  criteria: Array<string>;
  note: Array<string>;
  date: string;
  banner: string;
}

const TreasureBounty: Model<ITreasureBounty> =
  models.TreasureBounty ||
  model<ITreasureBounty>(
    'TreasureBounty',
    new Schema({
      title: {
        type: String,
        required: true,
      },
      desc: {
        type: [String],
        required: true,
      },
      criteria: {
        type: [String],
        required: true,
      },
      note: {
        type: [String],
        required: true,
      },
      date: {
        type: String,
        required: true,
      },
      banner: {
        type: String,
        required: true,
      },
    })
  );

export default TreasureBounty;
