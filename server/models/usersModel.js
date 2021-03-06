import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: String,
  dateOfBirth: String,
  accountBalance: {
    type: Number,
    default: 0.0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  accountNumber: {
    type: Number,
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
});

export const User = mongoose.model("Users", UserSchema);
