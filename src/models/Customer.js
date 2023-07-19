import mongoose from "mongoose";

const { Schema } = mongoose;

const customerSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    number: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

//If the Customer collection does not exist create a new one.
export default mongoose.models.Customer || mongoose.model("Customer", customerSchema);
