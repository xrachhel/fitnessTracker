const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    type: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number,
    duration: Number,
    distance: Number
});

const Exercise = mongoose.model("Exercise",ExerciseSchema);

module.exports = Exercise;