import mongoose, { Schema } from 'mongoose'

export const userSchema = new mongoose.Schema({
  google_id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  avatar: String,
  appointments: [
    {
      type: Schema.Types.ObjectId,
      ref: 'appointment'
    }
  ]
})

export default mongoose.model('user', userSchema)
