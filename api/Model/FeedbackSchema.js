import mongoose from 'mongoose';

const Feedback = mongoose.Schema({
    deviceId : String,
    feedBackForm : Object,
});

module.exports = mongoose.model('feedback', Feedback);
