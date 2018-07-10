
import mongoose from 'mongoose';

const RatingTeams = mongoose.Schema({
    deviceId : String,
    ratingForm : Object,
});

module.exports = mongoose.model('rating', RatingTeams);