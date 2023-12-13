const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    technique: {
        type: String,
        required: [true, 'Kind is required'],
    },
    image: {
        type: String,
        required: [true, 'ImageUrl is required'],
    },
    certificate: {
        type: String,
        required: [true, 'Description is required'],
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }

});
const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;