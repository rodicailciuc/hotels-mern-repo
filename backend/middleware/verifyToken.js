import jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
    const { token } = req.cookies;
    if (!token) {
        return res.status(401).json({
            title: 'Unauthorized',
            message: 'You are not authorized to access this page'
        });
    }
    jwt.verify(token, process.env.TOKEN_SECRET, (err, data) => {
        if (err) {
            return res.status(403).json({
                title: 'Forbidden',
                message: 'You are forbidden from accessing this page'
            });
        }
        next();
    });
};

export default verifyToken;
