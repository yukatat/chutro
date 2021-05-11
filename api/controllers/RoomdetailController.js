/**
 * RoomdetailController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    async find(req, res) {
        try {
            const roomdetail = await sails.models.roomdetail.find({roomid: req.param('roomid'), valid: req.param('valid'), userid: req.user});
            return res.ok(roomdetail);
        }
        catch (err) {
            return res.serverError(err);
        }
    },
    async create(req, res) {
        try {
            let params =  req.allParams();
            const roomdetail = await sails.models.roomdetail.create({
                userid: req.user,
                roomid: params.roomid,
                uname: params.uname,
                cmnd: params.cmnd, 
                sdt: params.sdt,
                rdate: params.rdate,
                tiencoc: params.tiencoc,
                giathue: params.giathue,
                giadien: params.giadien,
                gianuoc: params.gianuoc,
                tiente: params.tiente,
                valid: params.valid,
            });
            return res.ok(roomdetail);
        }
        catch (err) {
            return res.serverError(err);
        }
    },
    async update(req, res) {
        try {
            const result = await sails.models.roomdetail.update({id: req.params.id, userid: req.user},  req.allParams());
            return res.ok(result);
        }
        catch (err) {
            return res.serverError(err);
        }
    },
    async delete(req, res) {
        try {
            const roomdetail = await sails.models.roomdetail.destroyOne({id: req.params.id, userid: req.user});
            return res.ok(roomdetail);
        }
        catch (err) {
            return res.serverError(err);
        }
    },

};

