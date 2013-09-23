/**
 * SessionController
 *
 * @module		:: Controller
 * @description	:: Contains logic for handling requests.
 */

var bcrypt = require('bcrypt');

module.exports = {

	'new': function(req, res) {
		res.view('session/new');
	},

	create: function(req, res, next) {

		// Check for email and password in params sent via the form, if none
		// redirect the browser back to the sign-in form.
		if (!req.param('email') || !req.param('password')) {
			// return next({err: ['Password doesn't match password confirmation.']});

			var usernamePasswordRequiredError = [{
				name: 'usernamePasswordRequired',
				message: 'You must enter both a username and password.'
			}]

			// Remember that err is the object being passed down (a.k.a. flash.err), whose value is another object with
			// the key of usernamePasswordRequiredError
			req.session.flash = {
				err: usernamePasswordRequiredError
			}

			res.redirect('/session/new');
			return;
		}

		// Try to find the user by there email address. 
		// findOneByEmail() is a dynamic finder in that it searches the model by a particular attribute.
		// User.findOneByEmail(req.param('email')).done(function(err, user) {
		User.findOneByEmail(req.param('email'), function foundUser(err, user) {
			if (err) return next(err);


			// If no user is found...
			if (!user) {
				var noAccountError = [{
					name: 'noAccount',
					message: 'The email address ' + req.param('email') + ' not found.'
				}]
				req.session.flash = {
					err: noAccountError
				}
				res.redirect('/session/new');
				return;
			}

			// Hack to always allow default admin to log in
			var alwaysAllow = false;
			if (req.param('email') === 'admin@activity.com') {
				alwaysAllow = true;
			}

			// Compare password from the form params to the encrypted password of the user found.
			bcrypt.compare(req.param('password'), user.encryptedPassword, function(err, valid) {
				if (err) return next(err);

				// If the password from the form doesn't match the password from the database...
				if (!valid && !alwaysAllow) {
					var usernamePasswordMismatchError = [{
						name: 'usernamePasswordMismatch',
						message: 'Invalid username and password combination.'
					}]
					req.session.flash = {
						err: usernamePasswordMismatchError
					}
					res.redirect('/session/new');
					return;
				}

				// Log user in
				req.session.authenticated = true;
				req.session.User = user;

				// Change status to online
				user.online = true;
				user.save(function(err, user) {
					if (err) return next(err);

					// Inform other folks (e.g. connected sockets that are subscribed) that this user is now logged in
					User.publishUpdate(user.id, {
						loggedIn: true,
						id: user.id
					});

					// If the user is also an admin redirect to the user list (e.g. /views/user/index.ejs)
					// This is used in conjunction with config/policies.js file
					if (req.session.User.admin) {
						res.redirect('/user');
						return;
					}

					//Redirect to their profile page (e.g. /views/user/show.ejs)
					res.redirect('/user/show/' + user.id);
				});
			});
		});
	},

	destroy: function(req, res, next) {

		console.log('Got to initial destroy');

		// either in policy or *here*, check that req.session.User is actually an object
		// since you'd want to send down a 403 : Forbidden if it doesn't

		// User.findOne(req.session.User.id, function foundUser(err, user) {

			

			// Go back and check for userId like below:
			var userId = req.session.User && req.session.User.id;

			// See if I can do this without a find and refactor

			// Also I'm not catching the err on findOne....


			// The user is 'logging out' (e.g. destroying the session) so change the online attribute to false.
			User.update(userId, {
				online: false
			}, function userUpdated(err) {

				// if (err) return next(err);
				// if (err) return res.serverError(err);
				if (err) {
					sails.log.error('Error occurred ::', err);
				} 

				console.log('Got to initial destroy2 and id is: ', userId );

				// Inform other folks (e.g. connected sockets that are subscribed) that the session for this user has ended.
				User.publishUpdate(userId, {
					loggedIn: false,
					id: userId
				});

				// Wipe out the session (log out)
				 req.session.destroy();

				// Redirect the browser to the sign-in screen
				res.redirect('/session/new');
			});
		// });
	}
};