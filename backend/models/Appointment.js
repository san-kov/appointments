import mongoose, { Schema, SchemaType } from 'mongoose'

const appointmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  participants: [
    {
      type: Schema.Types.ObjectId,
      ref: 'user',
      default: []
    }
  ]
})

export default mongoose.model('appointment', appointmentSchema)
