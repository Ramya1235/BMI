import mongoose from 'mongoose';
const {Schema} = mongoose
import bcrypt from 'bcrypt';

const calcSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is required'
    },
    height: {
        type: Number,
        trim: true,
        required: 'Height is required',
    },
    weight: {
        type: Number,
        trim:true,
        required: 'Weight is required',

    },
    bmi: {
        type: Number,
        trim:true,
        required: 'BMI is required',

    },
},

{timestamps: true}
);

export default mongoose.model('Calcs', calcSchema);