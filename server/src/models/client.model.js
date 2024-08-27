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

const JobPostingSchema = new Schema({
  job_title: { type: String, required: true },
  job_description: { type: String, required: true },
  job_status: { type: String, enum: ['Open', 'Closed'], required: true },
  job_visibility: { type: String, enum: ['Public', 'Private'], required: true },
  job_skills_required: { type: [String], required: true },
  proposals: [ProposalSchema]
});

const HrManagerSchema = new Schema({
  hr_manager_name: { type: String, required: true },
  hr_manager_email: { type: String, required: true },
  hr_manager_phone: { type: String, required: true },
  is_active: { type: Boolean, default: true }
});

const CompanyAccountSchema = new Schema({
  login: { type: String, required: true },
  password: { type: String, required: true },
  is_active: { type: Boolean, default: true }
});

const clientSchema = new Schema({
  company_name: { type: String, required: true },
  company_address: { type: String, required: true },
  company_phone: { type: String, required: true },
  company_email: { type: String, required: true },
  company_account: CompanyAccountSchema,
  hr_manager: HrManagerSchema,
  job_postings: [JobPostingSchema]
}, {timestamps: true});

CompanyAccountSchema.pre("save", async function (next) {
    if(!this.isModified("password")) return next();

    this.password = await brcypt.hash(this.password, 10);
    next();
});

export const Client = mongoose.model('Client', clientSchema);

//Tokens usage and function have to be checked
//brcypt hashing have to be checked
//Timestamps have to be seen

