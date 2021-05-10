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
    async create(req, res) {
        try {
            let params =  req.allParams();
            const roombill = await sails.models.roombill.create({
                userid: req.user,
                roomid: params.roomid,
                ngay: params.ngay,
                nuoccu: params.nuoccu,
                diencu: params.diencu,
                nuocmoi: params.nuocmoi,
                dienmoi: params.dienmoi,
                tiendien: params.tiendien,
                tiennuoc: params.tiennuoc,
                tiendiennuoc: params.tiendiennuoc,
                tienphong: params.tienphong,
                tongtien: params.tongtien,
                tiendadong: params.tiendadong,
                ghichu: params.ghichu,
                status: params.status,
            });
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

