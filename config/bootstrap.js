/**
 * Bootstrap
 *
 * An asynchronous boostrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.bootstrap = function(cb) {

	// Create admin user if one doesn't already exist
	User.findOrCreate()
		.where({
			email: 'admin@activity.com'
		})
		.set({
			email: 'admin@activity.com',
			name: 'Admin',
			admin: true,
			password: 'abc123',
			confirmation: 'abc123',
		})
		.exec(function(err, user) {
			console.log('!!!!!', user, err);
			if (err) return cb(err);

			// It's very important to trigger this callack method when you are finished 
			// with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
			User.update({}, {
				online: false
			}).done(function(err, users) {
				if (err) {
					console.log(err);
				} else {
					console.log('Users: ', users);
				}
				cb(err);
			});
		});

};