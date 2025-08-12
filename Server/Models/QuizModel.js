const mongoose = require('mongoose');

const QuizAttemptSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    topic: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Topic',
        required: true
    },
    questions: [{
        question_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Question'
        },
        selected_option_index: Number,
        is_correct: Boolean
    }],
    score: {
        type: Number,
        required: true
    },
    percentage: {
        type: Number
    },
    attempted_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('QuizAttempt', QuizAttemptSchema);
