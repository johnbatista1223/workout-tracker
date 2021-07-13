const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: () => new Date()
  },
  exercises: [
    {
      type: {
        type: String,
        trim:true,
        required:true
      },
      name: {
        type:String,
        trim:true,
        required:true
      },
      duration: {
        type: Number,
        required:true
      },
      weight:{
        type:Number
      },
      reps: {
        type:Number
      },
      sets: {
        type:Number
      },
      distance: {
        type:Number
      },
    },
  ],
},
{
  toObject: {
  virtuals: true
  },
  toJSON: {
  virtuals: true 
  }
});
workoutSchema.virtual('totalDuration').get(function () {
  let totalDuration = 0 ;
 for (let i = 0; i < this.exercises.length; i++) {
    const element = this.exercises[i];
    totalDuration += element.duration 
  };
  return totalDuration;
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
