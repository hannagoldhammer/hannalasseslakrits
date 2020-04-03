const mongoose = require("mongoose");

const schemaProduct = new mongoose.Schema({
    name: { type: String, minlength: 3, unique: true, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    color: { type: String, required: true },
    createdByAdmin: { type: String, required: true },
    img: { type: String, required: true },
    date: { type: Date, default: Date.now },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
});

const Candy = mongoose.model("Candy", schemaProduct);

module.exports = Candy;