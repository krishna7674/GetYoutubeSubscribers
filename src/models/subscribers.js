const mongoose = require('mongoose');

const susbcriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subscribedChannel:{
        type: String,
        required: true,
    },
    subscribedDate: {
        type: Date,
        required: true,
        default: Date.now
    }
})

//Subscriber is the collection name here
module.exports = mongoose.model('subscriber',susbcriberSchema);