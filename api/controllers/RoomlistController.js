/**
 * RoomlistController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const User = require("../models/User");

module.exports = {
    async create(req, res) {
        try {
            let params =  req.allParams();
            const roomlist = await sails.models.roomlist.create({
                userid: req.user,
                roomid: params.roomid,
                name: params.name,
                status: params.status
            });
            return res.ok(roomlist);
        }
        catch (err) {
            return res.serverError(err);
        }
    },
    async findOne(req, res) {
        try {
            const roomlist = await sails.models.roomlist.findOne({id: req.params.id, userid: req.user});
            return res.ok(roomlist);
        }
        catch (err) {
            return res.serverError(err);
        }
    },
    async update(req, res) {
        try {
            let params =  req.allParams();
            let attributes =  {};
            if(params.status){
                attributes.status = params.status;
            }
            const result = await sails.models.roomlist.update({id: req.params.id, userid: req.user},  attributes);
            return res.ok(result);
        }
        catch (err) {
            return res.serverError(err);
        }
    },
    async delete(req, res) {
        try {
            const roomlist = await sails.models.roomlist.destroyOne({id: req.params.id, userid: req.user});
            return res.ok(roomlist);
        }
        catch (err) {
            return res.serverError(err);
        }
    },
    



};

