
import mongoose from 'mongoose';

const DeviceSchema = mongoose.Schema({
    deviceId : String
});

module.exports = mongoose.model('device', DeviceSchema);