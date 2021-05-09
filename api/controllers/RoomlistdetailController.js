/**
 * RoomlistdetailController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  /**
   * `RoomlistdetailController.listall()`
   */
  listall: async function (req, res) {
    try {
      // Build our SQL query template.
      var NAMES_OF_PETS_SQL = `SELECT 
      roomlist.id as roomlist_id, 
      roomlist.roomid, 
      roomlist.name,
      roomlist.status,
      roomdetail.id as roomdetail_id, 
      roomdetail.uname, 
      roomdetail.sdt, 
      roomdetail.rdate, 
      roomdetail.tiencoc,
      roomdetail.giathue,
      roomdetail.giadien,
      roomdetail.gianuoc,
      roomdetail.tiente  
      FROM roomlist 
      LEFT OUTER JOIN roomdetail 
      ON roomlist.roomid = roomdetail.roomid 
      WHERE roomlist.status = 1
      AND roomdetail.valid = 1
      UNION 
      SELECT
      roomlist.id as roomlist_id,
      roomlist.roomid, 
      roomlist.name,
      roomlist.status,
      '' as roomdetail_id, 
      '' as uname, 
      '' as sdt, 
      '' as rdate, 
      '' as tiencoc,
      '' as giathue,
      '' as giadien,
      '' as gianuoc,
      '' as tiente  
      FROM roomlist 
      WHERE roomlist.status = 0`;

      // Send it to the database.
      var rawResult = await sails.sendNativeQuery(NAMES_OF_PETS_SQL);
      Result = rawResult.rows;
      Result.sort(function(a, b){
        return a.roomid - b.roomid;
    });
      return res.ok(Result);
    }
    catch (err) {
      return res.serverError(err);
    }
  }
};



