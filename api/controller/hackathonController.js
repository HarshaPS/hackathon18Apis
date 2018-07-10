import Device from './../Model/DeviceSchema';
import Feedback from './../Model/FeedbackSchema';
import Rating from './../Model/RatingSchema';

exports.RegisterDevice = (req, res) => {
    let body = req.body;
    let query = {};
    query.deviceId = body.deviceId;
    if(body !== undefined ){
        Device.find(query).then(data => {
            if(data.length == 0){
                new Device({
                    deviceId : req.body.deviceId,
                }).save().then(data => {
                    res.status(200).send("Successfully registered with : "+data.deviceId);
                }).catch(err => {
                    res.status(500).send(err);
                });
            } else {
                res.send("Device is already registered");
            }
        }).catch(err => {
            console.log("Error  --- > ", err);
        });    
    }
}

exports.GetAllDevices = (req, res) => {
    let deviceList = [];
    Device.find().then(data => {     
        if(data.length == 0){
            res.send("No Devices found");
        } else { 
            data.forEach(element => {
                deviceList.push(element.deviceId)
            });
            console.log("Devices List :: ", deviceList);
            res.status(200).send(deviceList);
        }
    }).catch(err => {
        console.log("Error  --- > ", err);
    });
}

exports.Feedback = (req, res) => {
    let deviceId = req.body.deviceId;
    let query = {};
    query.deviceId = deviceId;
    if(deviceId !== undefined) {
        Feedback.update({
            deviceId : req.body.deviceId,
            feedBackForm : req.body.feedBackForm,
        }).then(data => {
           res.status(200).send("Successfully Feedback is updated with : " + JSON.stringify(data));
        }).catch(err => {
            res.send(err);
        });
    }
}

exports.RatingTeams = (req, res) => {
    let deviceId = req.body.deviceId;
    let query = {};
    query.deviceId = deviceId;
    if(deviceId !== undefined) {
        Rating.update({
            deviceId : req.body.deviceId,
            feedBackForm : req.body.ratingForm,
        }).then(data => {
           res.status(200).send("Successfully Rating is doone and updated with : " + data);
        }).catch(err => {
            res.send(err);
        });
    }
}

exports.QuickHelp = (req, res) => {
    res.status(200).send("QuickHelp");
}

