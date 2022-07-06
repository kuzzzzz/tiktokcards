import mongoose from "mongoose";
const CardSchema = new mongoose.Schema({
  Card: {
    type: Object,
  },
  timestamps: true,
});
export default mongoose.model.Cards || mongoose.model("Cards", CardSchema);
