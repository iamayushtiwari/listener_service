// Call Your Routes
// const { eventEmitter } = require("./utils/websocket/server");
const { asyncErrorHandler } = require("./utils/helpers/asyncErrorHandler");
const { _webSocketEvents } = require("./utils/constants");
const ExpressApp = require("express")();
/**
 * 
 * @param {ExpressApp} app 
 */
module.exports = (app) => {

    // app.post('/product', asyncErrorHandler((req, res, next) => {
    //     const { message } = req.body;
    //     eventEmitter.emit(_webSocketEvents.product, message);
    //     return res.send('message product sent to all WebSocket clients');
    // }));
}