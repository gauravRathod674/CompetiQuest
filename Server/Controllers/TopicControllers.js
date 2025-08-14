const Topic = require('../Models/TopicModel');

exports.createTopic = async (req, res) => {
    try {
        const { name, description, subjects } = req.body;

        if (!name) {
            return res.status(400).json({ message: 'Topic name is required' });
        }

        const topicExists = await Topic.findOne({ name });
        if (topicExists) {
            return res.status(400).json({ message: 'Topic with this name already exists' });
        }

        const topic = await Topic.create({
            name,
            description,
            subjects: subjects || []
        });

        res.status(201).json(topic);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

exports.getAllTopics = async (req, res) => {
    try {
        const { page = 1, limit = 10, search, subject } = req.query;
        
        let query = {};
        
        if (search) {
            query.name = { $regex: search, $options: 'i' };
        }

        if (subject) {
            query.subjects = { $in: [subject] };
        }

        const topics = await Topic.find(query)
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .sort({ created_at: -1 });

        const total = await Topic.countDocuments(query);

        res.status(200).json({
            topics,
            totalPages: Math.ceil(total / limit),
            currentPage: page,
            total
        });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

exports.getTopicById = async (req, res) => {
    try {
        const topic = await Topic.findById(req.params.id);
        
        if (!topic) {
            return res.status(404).json({ message: 'Topic not found' });
        }

        res.status(200).json(topic);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

exports.updateTopic = async (req, res) => {
    try {
        const { name, description, subjects } = req.body;
        const topic = await Topic.findById(req.params.id);

        if (!topic) {
            return res.status(404).json({ message: 'Topic not found' });
        }

        if (name && name !== topic.name) {
            const nameExists = await Topic.findOne({ name });
            if (nameExists) {
                return res.status(400).json({ message: 'Topic with this name already exists' });
            }
        }

        topic.name = name || topic.name;
        topic.description = description !== undefined ? description : topic.description;
        topic.subjects = subjects || topic.subjects;

        const updatedTopic = await topic.save();

        res.status(200).json(updatedTopic);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

exports.deleteTopic = async (req, res) => {
    try {
        const topic = await Topic.findById(req.params.id);
        
        if (!topic) {
            return res.status(404).json({ message: 'Topic not found' });
        }

        await Topic.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Topic deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

exports.addSubjectToTopic = async (req, res) => {
    try {
        const { subject } = req.body;
        const topic = await Topic.findById(req.params.id);

        if (!topic) {
            return res.status(404).json({ message: 'Topic not found' });
        }

        if (!subject) {
            return res.status(400).json({ message: 'Subject is required' });
        }

        if (topic.subjects.includes(subject)) {
            return res.status(400).json({ message: 'Subject already exists in this topic' });
        }

        topic.subjects.push(subject);
        const updatedTopic = await topic.save();

        res.status(200).json(updatedTopic);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

exports.removeSubjectFromTopic = async (req, res) => {
    try {
        const { subject } = req.body;
        const topic = await Topic.findById(req.params.id);

        if (!topic) {
            return res.status(404).json({ message: 'Topic not found' });
        }

        if (!subject) {
            return res.status(400).json({ message: 'Subject is required' });
        }

        topic.subjects = topic.subjects.filter(s => s !== subject);
        const updatedTopic = await topic.save();

        res.status(200).json(updatedTopic);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

exports.getAllSubjects = async (req, res) => {
    try {
        const topics = await Topic.find({});
        const subjects = [...new Set(topics.flatMap(topic => topic.subjects))];
        
        res.status(200).json(subjects);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};

exports.searchTopics = async (req, res) => {
    try {
        const { q } = req.query;
        
        if (!q) {
            return res.status(400).json({ message: 'Search query is required' });
        }

        const topics = await Topic.find({
            $or: [
                { name: { $regex: q, $options: 'i' } },
                { description: { $regex: q, $options: 'i' } },
                { subjects: { $in: [new RegExp(q, 'i')] } }
            ]
        }).limit(10);

        res.status(200).json(topics);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};
