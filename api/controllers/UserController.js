/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const Joi = require('joi');
const User = require('../models/User');
const JWTService = require('../services/JWTService');
module.exports = {
  /**
   * `UserController.signup()`
   */
  signup: async function (req, res) {
    try {
      //validate the email and password
      const schema = Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.string().required()
      });
      const params = await schema.validate(req.allParams());
      const email = params.value.email;
      const password = await UtilService.hashPassword(params.value.password);
      //check email exist
      const userexist = await sails.models.user.findOne({email});
      if(userexist){
        return res.badRequest({err: 'Tài khoản này đã tồn tại' });
      }
      //create new user
      const user = await sails.models.user.create({
        email,
        password
      });
      return res.ok({ email, password });
    }
    catch (err) {
      return res.serverError(err);
    }
  },

  /**
   * `UserController.login()`
   */
  login: async function (req, res) {

    try {
      //validate the email and password
      const schema = Joi.object().keys({
        email: Joi.string().required().email(),
        password: Joi.string().required()
      });
      const params = await schema.validate(req.allParams());
      const email = params.value.email;
      const password = params.value.password;
      const user = await sails.models.user.findOne({email});
      if(!user){
        return res.notFound({err: 'Tài khoản không tồn tại'})
      }
      const matchedPassword =  await UtilService.comparePassword(password, user.password);
      if(!matchedPassword){
        return res.badRequest({err: 'Mật khẩu không đúng', });
      }


      const token = JWTService.issuer({user: user.id}, '365 day');
      return res.ok({token});
    }
    catch (err) {
      return res.serverError(err);
    }


}

};

