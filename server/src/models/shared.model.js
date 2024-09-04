import mongoose from 'mongoose';

const Schema = mongoose;

export const AttachmentSchema = new Schema({
  file_name: { type: String, required: true },
  file_url: { type: String, required: true }  // URL from Cloudinary
});

export const MilestoneSchema = new Schema({
  description: { type: String, required: true },
  due_date: { type: Date, required: true },
  payment_type: { type: String, enum: ['Fixed', 'Hourly'], required: true },
  amount: { type: Number, required: true },
  is_completed: { type: Boolean, default: false },
  attachments: [AttachmentSchema]
});

export const ContractSchema = new Schema({
  contract_start_date: { type: Date, required: true },
  contract_end_date: { type: Date, required: true },
  contract_status: { type: String, enum: ['Active', 'Completed', 'Cancelled'], required: true }
});

export const ProposalSchema = new Schema({
  proposal_date: { type: Date, required: true },
  proposal_status: { type: String, enum: ['Pending', 'Accepted', 'Rejected'], required: true },
  freelancer_id: { type: Schema.Types.ObjectId, ref: 'Freelancer', required: true },
  freelancer_name: { type: String, required: true },
  milestones: [MilestoneSchema],
  contract: ContractSchema
});
