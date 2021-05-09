/**
 * Roomlist.js
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
    roomid: {
      type: 'number'
    },
    name: {
      type: 'string'
    },
    status: {
      type: 'boolean'
    }             
  }

};

