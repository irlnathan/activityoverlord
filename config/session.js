/**
 * Session
 * 
 * Sails session integration leans heavily on the great work already done by Express, but also unifies 
 * Socket.io with the Connect session store. It uses Connect's cookie parser to normalize configuration
 * differences between Express and Socket.io and hooks into Sails' middleware interpreter to allow you
 * to access and auto-save to `req.session` with Socket.io the same way you would with Express.
 *
 * For more information on configuring the session, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.session = {

  // Session secret is automatically generated when your new app is created
  // Replace at your own risk in production-- you will invalidate the cookies of your users,
  // forcing them to log in again. 
  secret: 'd494d185735d00432bc3485d32bd5ca8',


  // In production, uncomment the following lines to set up a shared redis session store
  // that can be shared across multiple Sails.js servers

// 

  adapter: 'memory',
  //
  // The following values are optional, if no options are set a redis instance running
  // on localhost is expected.
  // Read more about options at: https://github.com/visionmedia/connect-redis


  //
  // host: process.env.REDIS_HOST, //'soldierfish.redistogo.com', // to the right of @
  // port: process.env.REDIS_PORT,//9599, // port found in heroku redis to go
  // // ttl: <redis session TTL in seconds>,
  // db: process.env.REDIS_DB, //'redistogo',
  // pass: process.env.REDIS_PASS //'d5d68502e87bf36e5d6d25d9c0f37b5a' //password is to the left of @
  // prefix: 'sess:'

// you should REDIS_HOST

  // Uncomment the following lines to use your Mongo adapter as a session store
  // adapter: 'mongo',
  //
  // host: 'localhost',
  // port: 27017,
  // db: 'sails',
  // collection: 'sessions',
  //
  // Optional Values:
  //
  // # Note: url will override other connection settings
  // url: 'mongodb://user:pass@host:port/database/collection',
  //
  // username: '',
  // password: '',
  // auto_reconnect: false,
  // ssl: false,
  // stringify: true

};
