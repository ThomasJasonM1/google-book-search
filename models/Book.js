const mongoose = require("mongoose"),
Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        default: '',
    },
    authors: [
        {
            type: String,
            default: '',
        }
    ],
    description: {
        type: String,
        default: '',
    },
    image: {
        type: String,
        default: '',
    },
    link: {
        type: String,
        default: '',
    },
});

module.exports = mongoose.model("Book", bookSchema);