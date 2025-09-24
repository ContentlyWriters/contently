import mongoose from "mongoose";

const ResetTokenSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },
  token: {
    type: String,
    required: true,
  },
  expiresAt: {
    type: Date,
    required: true,
    expires: 0, 
  },
});

// Agar model already bana hua hai to dubara create na ho
export default mongoose.models.ResetToken ||
  mongoose.model("ResetToken", ResetTokenSchema);
