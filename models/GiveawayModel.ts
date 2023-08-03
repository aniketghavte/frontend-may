// Import necessary modules
import { Schema, model, models, Model, Document } from 'mongoose';

// Define the IUserProfile interface
export interface IGiveawayUser extends Document {
  userEmail: string;
  twitterLink: string;
  isNftDelivered: boolean;
}

const GiveawayUser: Model<IGiveawayUser> =
  models.GiveawayUser ||
  model<IGiveawayUser>(
    'NftUser',
    new Schema({
        userEmail: {
        type: String,
        required: true,
      },
      isNftDelivered: {
        type: Boolean,
        default: false,
      },
      twitterLink: {
        type: String,
        required: true,
      },
    })
  );

export default GiveawayUser;
