import mongoose from "mongoose";

const { Schema } = mongoose;

const companyDetailsSchema = new mongoose.Schema({
    phone_numbers: {
        type: [String],
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    images: {
        type: [String]
    },
});

//If the CompanyDetails  collection does not exist create a new one.
export default mongoose.models.CompanyDetails || mongoose.model("CompanyDetails", companyDetailsSchema);
