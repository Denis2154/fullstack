const jwt = require('jsonwebtoken');

const express = require('express');


function authMiddleware(req,res,next) {
    const token = req.header('Authorization')?.replace('Bearer', '');

    if (!token) {
        return res.status(401).json({message: 'Acces denied, no token provided'});
    }

    try {
        const decoded = jwt.verify(token, 'your_jwt_secret_key');
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({message: 'Invalid token'});
    }
}

module.exports = {authMiddleware};