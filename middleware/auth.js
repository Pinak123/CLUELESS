const jwt = require('jsonwebtoken');
const JWT_SECRET = 'your_jwt_secret'; 
const auth = (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer ', '');
        
        if (!token) {
            throw new Error();
        }

        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({
            status: 'error',
            message: 'Please authenticate'
        });
    }
};

module.exports = { auth };
