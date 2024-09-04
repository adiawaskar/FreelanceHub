import brcypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from 'mongoose';
import { AttachmentSchema, ProposalSchema } from './shared.model.js';

const {Schema} = mongoose;

const CertificationSchema = new Schema({
  certification_name: { type: String, required: true },
  certification_institution: { type: String, required: true },
  issue_date: { type: Date, required: true },
  expiration_date: { type: Date },
  certificate_url: { type: String, required: true }  // URL from Cloudinary
}, {timestamps: true, _id: true});

const PortfolioImageSchema = new Schema({
  image_url: { type: String, required: true }  // URL from Cloudinary
});

const PortfolioSchema = new Schema({
  project_name: { type: String, required: true },
  project_description: { type: String, required: true },
  project_url: { type: String },
  images: [PortfolioImageSchema]
}, {timestamps: true, _id: true});

const freelancerSchema = new Schema({
  name: { type: String, required: true, index: true },
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  profile_image: { type: String, required: true },
  profile_visibility: { type: String, enum: ['Public', 'Private'], required: true },
  skills: { type: [String], required: true },
  resume: [AttachmentSchema],
  certifications: [CertificationSchema],
  portfolio: [PortfolioSchema],
  proposals: [ProposalSchema],
  refreshToken: { type: String }
}, {timestamps: true});

freelancerSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = await brcypt.hash(this.password, 10);
    next();
})

freelancerSchema.methods.isPasswordCorrect = async function (password) {
    return await brcypt.compare(password, this.password);
}

freelancerSchema.methods.generateAccessToken = function() {
  return jwt.sign(
      {
          _id: this.id,
          email: this.email,
          name: this.name
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
      }
  )
}

freelancerSchema.methods.generateRefreshToken = function() {
  return jwt.sign(
      {
          _id: this.id
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
      }
  )
}

export const Freelancer = mongoose.model('Freelancer', freelancerSchema);

// _id: true for other Schemas than freeLancerSchema will have to be checked.
//timestamps for Schema other than freeLancerSchema have to be checked.