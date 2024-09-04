import mongoose from 'mongoose';
import { ProposalSchema } from './sharedSchemas.js';

const {Schema}  = mongoose;

const JobPostingSchema = new Schema({
  job_title: { type: String, required: true },
  job_description: { type: String, required: true },
  job_status: { type: String, enum: ['Open', 'Closed'], required: true },
  job_visibility: { type: String, enum: ['Public', 'Private'], required: true },
  job_skills_required: { type: [String], required: true },
  proposals: [ProposalSchema],
  client_id: { type: Schema.Types.ObjectId, ref: 'Client', required: true } // Linking to Client
}, {timestamps: true});

export const JobPosting = mongoose.model('JobPosting', JobPostingSchema);


