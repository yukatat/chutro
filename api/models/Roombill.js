/**
 * Roombill.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: {
      type: 'number',
      autoIncrement: true
    },
    userid: {
      type: 'number'
    },
    roomid: {
      type: 'number'
    },
    ngay: {
      type: 'string'
    },   
    nuoccu: {
      type: 'number'
    }, 
    diencu: {
      type: 'number'
    }, 
    nuocmoi: {
      type: 'number'
    }, 
    dienmoi: {
      type: 'number'
    }, 
    tiennuoc: {
      type: 'number'
    }, 
    tiendien: {
      type: 'number'
    }, 
    tiendiennuoc: {
      type: 'number'
    }, 
    tienphong: {
      type: 'number'
    }, 
    tongtien: {
      type: 'number'
    }, 
    tiendadong: {
      type: 'number'
    },      
    ghichu: {
      type: 'string'
    },
    status: {
      type: 'number'
    } 
  }
};

