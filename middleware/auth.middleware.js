const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    if (req.method === "OPTIONS") {
        return next();
    }

    try {
        const token = req.headers.authorization.split(' ')[1];

        if (!token) {
            res.status(401).json({message: "no authorization"})
        }

        req.user = jwt.verify(token, "secret-key");

        next();

    }catch (e) {
        res.status(401).json({message: "no authorization"})
    }
};