import mongoose from "mongoose";
const Schema = mongoose.Schema;

const AttachmentSchema = new Schema({
  file_name: { type: String, required: true },
  file_url: { type: String, required: true }  // URL from Cloudinary
});

const MilestoneSchema = new Schema({
  description: { type: String, required: true },
  due_date: { type: Date, required: true },
  payment_type: { type: String, enum: ['Fixed', 'Hourly'], required: true },
  amount: { type: Number, required: true },
  is_completed: { type: Boolean, default: false },
  attachments: [AttachmentSchema]
});

const ContractSchema = new Schema({
  contract_start_date: { type: Date, required: true },
  contract_end_date: { type: Date, required: true },
  contract_status: { type: String, enum: ['Active', 'Completed', 'Cancelled'], required: true }
});

const ProposalSchema = new Schema({
  proposal_date: { type: Date, required: true },
  proposal_status: { type: String, enum: ['Pending', 'Accepted', 'Rejected'], required: true },
  freelancer_id: { type: Schema.Types.ObjectId, ref: 'Freelancer', required: true },
  freelancer_name: { type: String, required: true },
  milestones: [MilestoneSchema],
  contract: ContractSchema
});

const jobPostingSchema = new Schema({
  job_title: { type: String, required: true },
  job_description: { type: String, required: true },
  job_status: { type: String, enum: ['Open', 'Closed'], required: true },
  job_visibility: { type: String, enum: ['Public', 'Private'], required: true },
  job_skills_required: { type: [String], required: true },
  proposals: [ProposalSchema],
  client_id: { type: Schema.Types.ObjectId, ref: 'Client', required: true } // Linking to Client
}, {timestamps: true});

export const JobPosting = mongoose.model('JobPosting', jobPostingSchema);

//timestamps for Schema other than jobPostingSchema have to be checked