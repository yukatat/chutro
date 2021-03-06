/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

 '/': { view: 'pages/homepage' },
 //Roomlist
 'POST /roomlist' : 'RoomlistController.create',
 'GET /roomlist' : 'RoomlistController.find',
 'GET /roomlist/:id' : 'RoomlistController.findOne',
 'PATCH /roomlist/:id' : 'RoomlistController.update',
 'DELETE /roomlist/:id' : 'RoomlistController.delete',
//Roombill
'GET /roombill' : 'RoombillController.find',
'GET /roombill/findbillingopen' : 'RoombillController.findbillingopen',
'GET /roombill/findbilling1month' : 'RoombillController.findbilling1month',
'GET /roombill/findbilling3month' : 'RoombillController.findbilling3month',
'POST /roombill' : 'RoombillController.create',
'PATCH /roombill:id' : 'RoombillController.update',
'DELETE /roombill/:id' : 'RoombillController.delete',
//Roomdetail
'GET /roomdetail' : 'RoomdetailController.find',
'POST /roomdetail' : 'RoomdetailController.create',
'PATCH /roomdetail:id' : 'RoomdetailController.update',
'DELETE /roomdetail/:id' : 'RoomdetailController.delete',
 //Roomlistdetail
  'GET /roomlistdetail' : 'RoomlistdetailController.listall',
  //User
  'POST /user/login' : 'UserController.login',
  'POST /user/signup' : 'UserController.signup',

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
