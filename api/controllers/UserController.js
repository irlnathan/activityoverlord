/**
 * UserController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

module.exports = {

  /* e.g.
  sayHello: function (req, res) {
    res.send('hello world!');
  }
  */

  // This loads the sign-up page --> new.ejs
  'new': function (req, res) {
  	res.view();
  },

  create: function (req, res, next) {

	  // Create a User with the params sent from 
	  // the sign-up form --> new.ejs
	  User.create( req.params.all(), function userCreated (err, user) {
	      
	      // // If there's an error
	      // if (err) return next(err);

	      if (err) {
	        // console.log(err);
	        req.session.flash = {
	          err: err
	        }

	        // If error redirect back to sign-up page
	        return res.redirect('/user/new');
	      }

	      // After successfully creating the user
	      // redirect to the show action
	      // From ep1-6: //res.json(user); 

	      res.redirect('/user/show/'+user.id);
	  });
	},

	// render the profile view (e.g. /views/show.ejs)
  show: function (req, res, next) {
    User.findOne(req.param('id'), function foundUser (err, user) {
      if (err) return next(err);
      if (!user) return next();
      res.view({
        user: user
      });
    });
  },

  index: function (req, res, next) {

    // Get an array of all users in the User collection(e.g. table)
    User.find(function foundUsers (err, users) {
      if (err) return next(err);
      // pass the array down to the /views/index.ejs page
      res.view({
        users: users
      });
    });
  },

  // render the edit view (e.g. /views/edit.ejs)
  edit: function (req, res, next) {

    // Find the user from the id passed in via params
    User.findOne(req.param('id'), function foundUser (err, user) {
      if (err) return next(err);
      if (!user) return next();
      
      res.view({
        user: user
      });
    });
  },

  // process the info from edit view
  update: function (req, res, next) {
    User.update(req.param('id'), req.params.all(), function userUpdated (err) {
      if (err) {
        return res.redirect('/user/edit/' + req.param('id'));
      }

      res.redirect('/user/show/' + req.param('id'));
    });
  }

};
