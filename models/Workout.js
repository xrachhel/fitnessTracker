const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date
    },
    exercise: [
        {
            type: Schema.Types.ObjectId,
            ref: "Excercise"
        }
    ]

})

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;