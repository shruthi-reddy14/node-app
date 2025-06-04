import mongoose from 'mongoose'
const orderSchema = mongoose.Schema({
  name: { type: String },
  price: { type: Number },
});


export default mongoose.model("order", orderSchema);