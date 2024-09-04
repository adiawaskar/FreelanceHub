import mongoose from 'mongoose';
// import { ProposalSchema } from './sharedSchemas.js';

const {Schema}  = mongoose;

const JobPostingSchema = new Schema({
  company_name: { type: String, required: true }, // New field for company name
  job_title: { type: String, required: true },
  job_description: { type: String, required: true },
  job_status: { type: String, enum: ['Open', 'Closed'], required: true },
  job_visibility: { type: String, enum: ['Public', 'Private'], required: true },
  job_skills_required: { type: [String], required: true },
  pay_rate: { type: Number, required: true }, // New field for pay rate
  location: { type: String, required: true }, // New field for location
  requirements: { type: [String], required: true }// New field for additional requirements
  // proposals: [ProposalSchema],
  // client_id: { type: Schema.Types.ObjectId, ref: 'Client', required: true } // Linking to Client
}, { timestamps: true });



export const JobPosting = mongoose.model('JobPosting', JobPostingSchema);


