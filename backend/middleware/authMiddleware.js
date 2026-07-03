import jwt from 'jsonwebtoken';

export const verifyToken = (req,res,next) => {
    const token = req.headers['authorization'];

    if(!token) {
        return res.status(403).json({error: 'Access Denied. No token provided.'});
    }

    try{
        const verified = jwt.verify(token.split(' ')[1], 'your_secret_key'); 
        req.user = verified;
        next();
    }catch(err){
        res.status(400).json({error: 'Invalid Token'});
    }
};

export const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next(); // Agar admin hai, toh aage badhne do
    } else {
        res.status(403).json({ error: "Access Denied. Admin only." });
    }
};