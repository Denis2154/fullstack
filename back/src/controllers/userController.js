const User = require('../class/User');
const jwt = require('jsonwebtoken');


const registerUser = async(req, res) => {

    try {

        const {email, password} = req.body;

        const existingUser = await User.findOne({email});
        
        if(existingUser) {
            return res.status(400).json({message: 'User already exists'});
        };

        const newUser = new User({email, password});
        
        await newUser.save();

        res.status(201).json({
            message: 'User created successfully', token
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error registering user', error: error.message
        });
    }
}

const loginUser = async(req, res) => {
    
    const {email, password} = req.body;

    try {
    
        const user = await User.findOne({email});
        if(!user) {
            return res.status(401).json({message: 'Invalid credentials'});
        }

        const isMatch = await user.comparePassword(password);
        if(!isMatch) {
            return res.status(401).json({message: 'Invalid credentials'});
        }

        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET, process.env.JWT_EXPIRATION);

        res.json({message: 'Login successful', token});

    } catch (error) {
        res.status(500).json({message: 'Error logging in', error: error.message});
    }
};

module.exports = {registerUser, loginUser};