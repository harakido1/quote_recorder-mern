// Import Mongoose
const mongoose = require("mongoose");

// Create a new Mongoose model constructor.
const UserSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        quote: { type: String },
    },
    { collection: "user-quote-data" }
);

// Create model from the User schema:
const model = mongoose.model("UserData", UserSchema);

module.exports = model;
