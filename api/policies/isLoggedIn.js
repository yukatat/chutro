const User = require("../models/User");
const JWTService = require("../services/JWTService");

module.exports = async function(req, res, next) {
    if(!req.headers || !req.headers.authorization){
        return res.badRequest({err: 'Thiếu authorization header'});

    }
    const tokenParam = req.headers.authorization;
     const decodedToken = JWTService.verify(tokenParam);
    const user = await sails.models.user.findOne({
        id : decodedToken.user
    });
    if(!user){
        return next({err: 'Credential không hợp lệ'});
    }
    req.user = user.id;
    next();
}