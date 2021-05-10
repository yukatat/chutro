/**
 * Roomdetail.js
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
    uname: {
      type: 'string'
    },
    sdt: {
      type: 'string'
    },     
    rdate: {
      type: 'string'
    },      
    tiencoc: {
      type: 'number'
    }, 
    giathue: {
      type: 'number'
    }, 
    giadien: {
      type: 'number'
    }, 
    gianuoc: {
      type: 'number'
    },    
    tiente: {
      type: 'string'
    }, 
    valid: {
      type: 'boolean'
    }

  }
};

