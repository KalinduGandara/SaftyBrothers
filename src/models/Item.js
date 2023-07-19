import mongoose from "mongoose";

const { Schema } = mongoose;

const itemSchema = new mongoose.Schema({
  item_id: {
    type: mongoose.Schema.Types.String,
    required: [true, "Item Id is required"],
    unique: true,
  },
  name: {
    type: mongoose.Schema.Types.String,
    required: [true, "Item name is required"],
  },
  brand: {
    type: mongoose.Schema.Types.String,
  },
  manufacture: {
    type: mongoose.Schema.Types.String,
  },
  description: {
    type: mongoose.Schema.Types.String,
  },
  sizes: [
    {
      size: {
        type: mongoose.Schema.Types.String,
        required: true,
      },
      quantity: {
        type: mongoose.Schema.Types.Number,
        required: true,
      },
    },
  ],
});

//If the Item collection does not exist create a new one.
// mongoose.deleteModel("Item");
export default mongoose.models.Item || mongoose.model("Item", itemSchema);
