import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true, unique: true },
    password: { type: String, required: true },
    cartData: {type: Object, default:{}}
  },{
    minimize: false
  },
  {
    timestamps: true,
  }
)

export const User = new model("user", userSchema);
