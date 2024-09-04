import brcypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from 'mongoose';

const {Schema} = mongoose;

const clientSchema = new Schema({
  company_name: { type: String, required: true },
  company_address: { type: String, required: true },
  company_phone: { type: String, required: true },
  company_email: { type: String, required: true },
  password: { type: String, required: true },
  job_postings: [{ type: Schema.Types.ObjectId, ref: 'JobPosting' }] // Referencing JobPosting model
}, {timestamps: true});

clientSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = await brcypt.hash(this.password, 10);
    next();
});

export const Client = mongoose.model('Client', clientSchema);

//Tokens usage and function have to be checked
//brcypt hashing have to be checked
//Timestamps have to be seen

