const { default: mongoose } = require("mongoose");

const modifiedUserSchema = new mongoose.Schema({
    id: { type: String, required: true },
    user: { type: String, required: true },
    class: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    inserted_at: { type: Date, required: true },
    modified_at: { type: Date, required: true }
});

const ModifiedUser = mongoose.model('ModifiedUser', modifiedUserSchema);

module.exports = { ModifiedUser }