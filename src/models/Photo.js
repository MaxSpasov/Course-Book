const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    type: {
        type: String,
        required: [true, 'Type is required'],
    },
    certificate: {
        type: String,
        required: [true, 'Description is required'],
    },
    image: {
        type: String,
        required: [true, 'ImageUrl is required'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
    price: {
        type: String,
        required: [true, 'Price is required'],
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    }

});
const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;