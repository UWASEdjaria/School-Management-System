import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['parent', 'student'], default: 'parent' },
  deviceId: { type: String },
  isDeviceVerified: { type: Boolean, default: false },
  feeBalance: { type: Number, default: 0 },
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' }
}, { timestamps: true });

export default mongoose.model('User', userSchema);
