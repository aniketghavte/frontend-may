const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");
mongoose.plugin(mongoosePaginate);

const waitlistUserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      trim: true,
      unique: true
    },
    name: {
      type: String,
    },
    waitlistRank: {
        type: Number
    },
    username: {
      type: String,
      required: false, // Make the field optional
    },
    isUserNameSet: { 
      type: String
    }
  },
  {
    timestamps: true,
  }
);

const WaitlistUser = mongoose.model("WaitlistUser", waitlistUserSchema);

module.exports = WaitlistUser;
