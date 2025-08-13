const User = require('../Models/UserModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const generateToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:'30d',
    })
};

exports.registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ message: 'Please enter all fields' });
        }

     
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }

        const user = await User.create({
            name,
            email,
            password,
        });

       
        if (user) {
            res.status(201).json({
                _id: user.id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id),
            });
        } else {
            res.status(400).json({ message: 'Invalid user data' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};


exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

       
        const user = await User.findOne({ email });

        
        if (user && (await bcrypt.compare(password, user.password))) {
           
            res.status(200).json({
                _id: user.id,
                name: user.name,
                email: user.email,
                token: generateToken(user._id),
            });
        } else {
           
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error: error.message });
    }
};