/**
 * RoombillController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    async find(req, res) {
        try {
            const roombill = await sails.models.roombill.find({roomid: req.param('roomid'), status: req.param('status'), userid: req.user})
            .sort(req.param('sort'))
            .limit(req.param('limit'));
            return res.ok(roombill);
        }
        catch (err) {
            return res.serverError(err);
        }
    },
    async findbillingopen(req, res) {
        try {
            const roombill = await sails.models.roombill.find({status: false})
            .sort('roomid ASC');
            return res.ok(roombill);
        }
        catch (err) {  
            return res.serverError(err);
        }
    },
    async findbilling1month(req, res) {
        try {
            const date = new Date();
            const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
            const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
            const roombill = await sails.models.roombill.find({
                ngay: { '>=': firstDay, '<=': lastDay }
            })
            .sort('roomid ASC');
            return res.ok(roombill);
        }
        catch (err) {
            return res.serverError(err);
        }
    },
    async findbilling3month(req, res) {
        try {
            const date = new Date();
            const firstDay = new Date(date.getFullYear(), date.getMonth()-2, 1);
            const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
            const roombill = await sails.models.roombill.find({
                ngay: { '>=': firstDay, '<=': lastDay }
            })
            .sort('roomid ASC');
            return res.ok(roombill);
        }
        catch (err) {
            return res.serverError(err);
        }
    },
    async create(req, res) {
        try {
            let params =  req.allParams();
            params.userid = req.user;
            const roombill = await sails.models.roombill.create(params);
            return res.ok(roombill);
        }
        catch (err) {
            return res.serverError(err);
        }
    },
    async update(req, res) {
        try {
            const result = await sails.models.roombill.update({id: req.params.id, userid: req.user},  req.allParams());
            return res.ok(result);
        }
        catch (err) {
            return res.serverError(err);
        }
    },
    async delete(req, res) {
        try {
            const roombill = await sails.models.roombill.destroyOne({id: req.params.id, userid: req.user});
            return res.ok(roombill);
        }
        catch (err) {
            return res.serverError(err);
        }
    },

};

