const User = require("../models/User");
const JWTService = require("../services/JWTService");

module.exports = async function(req, res, next) {
    if(!req.headers || !req.headers.authorization){
        res.status(401);
        return res.send('Thiếu authorization header');

    }
    const tokenParam = req.headers.authorization;
     const decodedToken = JWTService.verify(tokenParam);
    const user = await sails.models.user.findOne({
        id : decodedToken.user
    });
    if(user){
        res.status(401);
        return res.send('Credential không hợp lệ');
    }
    req.user = user.id;
    next();
}