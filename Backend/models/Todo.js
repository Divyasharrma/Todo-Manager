const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true },
    completed: { type: Boolean, default: false },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }
}, { timestamps: true });

// Faster: get a user's newest todos
todoSchema.index({ user: 1, createdAt: -1 });

// Faster: get a user's todos filtered by completion status
todoSchema.index({ user: 1, completed: 1, createdAt: -1 });

module.exports = mongoose.model("Todo", todoSchema);