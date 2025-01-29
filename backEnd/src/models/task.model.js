import mongoose from "mongoose";

const userTaskSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User",
        required: true,
    },
    task: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        default: false
    },
    create_at : {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("task", userTaskSchema);