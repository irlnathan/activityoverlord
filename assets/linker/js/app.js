/**
 * app.js
 *
 * This file contains some conventional defaults for working with Socket.io + Sails.
 * It is designed to get you up and running fast, but is by no means anything special.
 *
 * Feel free to change none, some, or ALL of this file to fit your needs!
 */


(function (io) {

  // as soon as this file is loaded, connect automatically, 
  var socket = io.connect();
  if (typeof console !== 'undefined') {
    log('Connecting to Sails.js...');
  }

  socket.on('connect', function socketConnected() {

    ///////////////////////////////////////////////////////////
    // Here's where you'll want to add any custom logic for
    // when the browser establishes its socket connection to 
    // the Sails.js server.
    ///////////////////////////////////////////////////////////
    log(
        'Socket is now connected and globally accessible as `socket`.\n' + 
        'e.g. to send a GET request to Sails, try \n' + 
        '`socket.get("/", function (response) ' +
        '{ console.log(response); })`'
    );
    ///////////////////////////////////////////////////////////


    // Listen for Comet messages from Sails
    socket.on('message', cometMessageReceivedFromServer);


    // By subscribing to the user controller action route we are now subscribed
    // to both the Class room and the instance rooms of the User model.
    socket.get('/user/subscribe/');


    console.log("The socket is: ", socket.socket.sessionid);
    // console.log(document.location.pathname);
    // var page = document.location.pathname;

    // switch (page) {

    //   // Admin Page, you can slurp the users
    //   // case '/user':
    //   //   socket.get('/user/subscribe/', {
    //   //   userIds: slurpUsers()
    //   //   }, console.log.bind(console));

    //   case '/user':
    //     socket.get('/user/subscribe/', function(response) { 
    //       console.log(response);
    //     });
    //     break;

    //   // Create generic connection
    //   // default: 
        
    // }
  });


  // Expose connected `socket` instance globally so that it's easy
  // to experiment with from the browser console while prototyping.
  window.socket = socket;


  // Simple log function to keep the example simple
  function log () {
    if (typeof console !== 'undefined') {
      console.log.apply(console, arguments);
    }
  }
  

})(

  // In case you're wrapping socket.io to prevent pollution of the global namespace,
  // you can replace `window.io` with your own `io` here:
  window.io

);

function cometMessageReceivedFromServer(message) {

  console.log("Here's the message: ", message);

  // Looks like this one is an update about a user
  if (message.model === 'user' &&
    message.verb === 'update') {

    var userId = message.id
    var changes = message.data;
    updateUserInDom(userId, changes, message);
    // console.log("Changes: ", changes);
  }

  if (message.model === 'user' &&
      message.verb === 'create') {

      // var addedUser = message.data.user;
      // UserIndexPage.addUser(addedUser);

      var userId = message.id;
      var addedUser = message.data.user;
      updateUserInDom(userId, addedUser, message);
 
    }

  if (message.model === 'user' &&
      message.verb === 'destroy') {

      var userId = message.id;

      // Should I be doing this?  Maybe create an object and pass it down.
      var changes = "";
      // UserIndexPage.destroyUser(destroyedUser);
      updateUserInDom(userId, null, message);

      // console.log(destroyedUser);
      // console.log("Got to the comet message");
 
    }
}

function updateUserInDom(userId, changes, message) {
  // Get the page we're on
  var page = document.location.pathname;

  // Strip trailing slash if we've got one
  page = page.replace(/(\/)$/, '');
  console.log('were on page: ', page);

  // Route to the appropriate user update handler based on the current page
  switch (page) {
    case '/user':
      UserIndexPage.updateUser(userId, changes);
      if(message.verb === 'create') {
        UserIndexPage.addUser(changes);
      }
      if(message.verb === 'destroy') {
        UserIndexPage.destroyUser(userId);
      }
      break;
  }
}

/////////////////////////////////////////////////
// User index page DOM manipulation logic
// (i.e. backbone view)
/////////////////////////////////////////////////
var UserIndexPage = {

  // Logic on how to update a user on the user index page
  updateUser: function(id, changes) {
    if (changes.loggedIn) {
      var $userRow = $('tr[data-id="' + id + '"] td img').first();
      $userRow.attr('src', "/images/icon-online.png");
    } else {
      var $userRow = $('tr[data-id="' + id + '"] td img').first();
      $userRow.attr('src', "/images/icon-offline.png");
    }
  },

  addUser: function(user) {
    // var template = _.template(
  //    $( JST.addUserIt ).html()
  //  );
  var obj = {
    user: user,
    _csrf: window.overlord.csrf || ''
  };

  // This is the path to the templates file
    $( 'tr:last' ).after(
      
      JST['assets/linker/templates/addUser.ejs']( obj )
    );
  },

  destroyUser: function(id) {
    $('tr[data-id="' + id + '"]').remove();
  }
};
